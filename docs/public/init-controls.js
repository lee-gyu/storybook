import { i18n, setTheme } from "@innorules/ir-style";

document.getElementById( "themeSwitch" ).onchange = ( ev ) =>
{
    setTheme( ev.target.checked ? "dark" : "light" );
};

const select = document.getElementById( "locale-select" );

select.onchange = () => i18n.setLocale( select.value );