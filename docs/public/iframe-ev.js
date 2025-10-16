window.addEventListener( "message", ( event ) =>
{
    if( !event.data || event.data.type !== "update-doc" || !event.data.context ) return;

    globalThis.__latest_context = event.data.context;

    updateHTML( event.data.context );
    updateCSS( event.data.context );
    updateJS( event.data.context );
} );

window.addEventListener( "message", ( event ) =>
{
    if( !event.data || event.data.type !== "liveJS-load" ) return;
    if( !globalThis.__latest_context.exampleJs ) return;

    // liveJS 실행 후 example-code 추가
    appendScript( "liveJSExample", globalThis.__latest_context.exampleJs || "" );

} );

function updateHTML( context )
{
    document.getElementById( "live_editor_wrapper" ).innerHTML = context.html || "";
}

function updateCSS( context )
{
    document.getElementById( "liveEditorCSS" ).innerHTML = context.css || "";
}

function updateJS( context )
{
    clearIRComp();
    appendScript( "liveJS", context.js || "" );
}

function appendScript( id, code )
{
    document.getElementById( id ).remove();

    const script = document.createElement( "script" );

    script.type = "module";
    script.id = id;

    if( id === "liveJS" )
    {
        // liveJS인 경우, message 추가 송신
        code += `\n;window.postMessage( { type: "liveJS-load" }, "*" );\n`;
    }

    script.innerHTML = code;

    document.body.appendChild( script );
}

function clearIRComp()
{
    __IR_DEBUG__.getComponents().forEach( ( comp ) => comp.destroy() );
}

new ResizeObserver( () =>
{
    window.postMessage( { type: "set-height", height: document.body.scrollHeight }, "*" );
} ).observe( document.body );