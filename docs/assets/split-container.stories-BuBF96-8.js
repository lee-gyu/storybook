import{n as e}from"./chunk-BneVvdWh.js";import{a as t,n,o as r,r as i,s as a,t as o}from"./context-C6uFeUW4.js";import{t as s}from"./jsx-runtime-6sF1Ejqi.js";var c,ee=e((()=>{c=`import { IRSplitContainer } from "@innorules/ir-style";

const split = new IRSplitContainer( { elements: ["#split-0", "#split-1"] } );

/** getSizes API 예시 */
btn1.onclick = () => alert( split.getSizes() );

/** collapse API 예시 */
btn2.onclick = () => split.collapse( 0 );

/** destroy API 예시 */
btn3.onclick = () => split.destroy();

split.setSizes( [25, 75] );`})),l,u=e((()=>{l=`<div class="ir-flex ir-gap-x-xxs ir-p-xs" style="border-bottom: 1px solid var(--border-color);">
    <button id="btn1" class="button">Get Size</button>
    <button id="btn2" class="button">Collapse</button>
    <button id="btn3" class="button">Destroy</button>
</div>
<div style="height: 100%;">
    <div id="split-0">
        <p>Panel 0</p>
        <p>Panel 1</p>
        <p>Panel 2</p>
        <p>Panel 3</p>
        <p>Panel 4</p>
        <p>Panel 5</p>
        <p>Panel 6</p>
        <p>Panel 7</p>
        <p>Panel 8</p>
        <p>Panel 9</p>
        <p>Panel 10</p>
        <p>Panel 11</p>
        <p>Panel 12</p>
        <p>Panel 13</p>
        <p>Panel 14</p>
        <p>Panel 15</p>
        <p>Panel 16</p>
        <p>Panel 17</p>
        <p>Panel 18</p>
        <p>Panel 19</p>
    </div>
    <div id="split-1">
        <span>Panel 0</span>
        <span>Panel 1</span>
        <span>Panel 2</span>
        <span>Panel 3</span>
        <span>Panel 4</span>
        <span>Panel 5</span>
        <span>Panel 6</span>
        <span>Panel 7</span>
        <span>Panel 8</span>
        <span>Panel 9</span>
        <span>Panel 10</span>
        <span>Panel 11</span>
        <span>Panel 12</span>
        <span>Panel 13</span>
        <span>Panel 14</span>
        <span>Panel 15</span>
        <span>Panel 16</span>
        <span>Panel 17</span>
        <span>Panel 18</span>
        <span>Panel 19</span>
        <span>Panel 20</span>
        <span>Panel 21</span>
        <span>Panel 22</span>
        <span>Panel 23</span>
        <span>Panel 24</span>
        <span>Panel 25</span>
        <span>Panel 26</span>
        <span>Panel 27</span>
        <span>Panel 28</span>
        <span>Panel 29</span>
        <span>Panel 30</span>
        <span>Panel 31</span>
        <span>Panel 32</span>
        <span>Panel 33</span>
        <span>Panel 34</span>
        <span>Panel 35</span>
        <span>Panel 36</span>
        <span>Panel 37</span>
        <span>Panel 38</span>
        <span>Panel 39</span>
        <span>Panel 40</span>
        <span>Panel 41</span>
        <span>Panel 42</span>
        <span>Panel 43</span>
        <span>Panel 44</span>
        <span>Panel 45</span>
        <span>Panel 46</span>
        <span>Panel 47</span>
        <span>Panel 48</span>
        <span>Panel 49</span>
        <span>Panel 50</span>
        <span>Panel 51</span>
        <span>Panel 52</span>
        <span>Panel 53</span>
        <span>Panel 54</span>
        <span>Panel 55</span>
        <span>Panel 56</span>
        <span>Panel 57</span>
        <span>Panel 58</span>
        <span>Panel 59</span>
        <span>Panel 60</span>
        <span>Panel 61</span>
        <span>Panel 62</span>
        <span>Panel 63</span>
        <span>Panel 64</span>
        <span>Panel 65</span>
        <span>Panel 66</span>
        <span>Panel 67</span>
        <span>Panel 68</span>
        <span>Panel 69</span>
        <span>Panel 70</span>
        <span>Panel 71</span>
        <span>Panel 72</span>
        <span>Panel 73</span>
        <span>Panel 74</span>
        <span>Panel 75</span>
        <span>Panel 76</span>
        <span>Panel 77</span>
        <span>Panel 78</span>
        <span>Panel 79</span>
        <span>Panel 80</span>
        <span>Panel 81</span>
        <span>Panel 82</span>
        <span>Panel 83</span>
        <span>Panel 84</span>
        <span>Panel 85</span>
        <span>Panel 86</span>
        <span>Panel 87</span>
        <span>Panel 88</span>
        <span>Panel 89</span>
        <span>Panel 90</span>
        <span>Panel 91</span>
        <span>Panel 92</span>
        <span>Panel 93</span>
        <span>Panel 94</span>
        <span>Panel 95</span>
        <span>Panel 96</span>
        <span>Panel 97</span>
        <span>Panel 98</span>
        <span>Panel 99</span>
    </div>
</div>`}));function d(){return(0,f.jsxs)(r,{children:[(0,f.jsx)(t,{children:`API`}),(0,f.jsxs)(`p`,{children:[(0,f.jsx)(`code`,{children:`setSizes([25, 75])`}),` 백분율 배열로, 분할 요소의 크기를 업데이트할 수 있습니다.`,(0,f.jsx)(`br`,{}),(0,f.jsx)(`code`,{children:`getSizes`}),` resize된 백분율 배열을 반환합니다.`,(0,f.jsx)(`br`,{}),(0,f.jsx)(`code`,{children:`collapse(index)`}),` 설정된 minSize의 크기로 요소의 크기를 변경합니다. (모든 요소는 앞쪽, 위쪽으로 축소됨)`,(0,f.jsx)(`br`,{}),(0,f.jsx)(`code`,{children:`destroy`}),` split을 제거합니다.`]}),(0,f.jsx)(i,{docList:p}),(0,f.jsx)(a,{css:`#live_editor_wrapper { padding: 0 }`,fixedHeight:400,htmlRaw:l,code:c})]})}var f,p,te=e((()=>{ee(),u(),o(),f=s(),p=[[`/classes/_innorules_solid-ui.IRSplitContainer.html`,`IRSplitContainer`]],d.__docgenInfo={description:``,methods:[],displayName:`API`}})),m,h=e((()=>{m=`import { IRSplitContainer } from "@innorules/ir-style";

new IRSplitContainer( {
    elements: ["#split-0", "#split-1", "#split-2"],
} );

new IRSplitContainer( {
    elements: ["#split-3", "#split-4"],
    options: {
        direction: "vertical",
        gutterCls: "thin",
        // 패널을 드래그할 때 크기 변화가 반영되는 최소 단위 설정 (기본값 5)
        dragInterval: 10,
    },
} );

new IRSplitContainer( {
    elements: ["#split-5", "#split-6"],
} );`})),g,ne=e((()=>{g=`<div style="height: 100%;">
    <div id="split-0">panel 1</div>
    <div id="split-1">panel 2</div>
    <div id="split-2">
        <div id="split-3">panel 3</div>
        <div id="split-4">
            <div id="split-5">
                <p>Panel 0</p>
                <p>Panel 1</p>
                <p>Panel 2</p>
                <p>Panel 3</p>
                <p>Panel 4</p>
                <p>Panel 5</p>
                <p>Panel 6</p>
                <p>Panel 7</p>
                <p>Panel 8</p>
                <p>Panel 9</p>
                <p>Panel 10</p>
                <p>Panel 11</p>
                <p>Panel 12</p>
                <p>Panel 13</p>
                <p>Panel 14</p>
                <p>Panel 15</p>
                <p>Panel 16</p>
                <p>Panel 17</p>
                <p>Panel 18</p>
                <p>Panel 19</p>
            </div>
            <div id="split-6">
                <span>Panel 0</span>
                <span>Panel 1</span>
                <span>Panel 2</span>
                <span>Panel 3</span>
                <span>Panel 4</span>
                <span>Panel 5</span>
                <span>Panel 6</span>
                <span>Panel 7</span>
                <span>Panel 8</span>
                <span>Panel 9</span>
                <span>Panel 10</span>
                <span>Panel 11</span>
                <span>Panel 12</span>
                <span>Panel 13</span>
                <span>Panel 14</span>
                <span>Panel 15</span>
                <span>Panel 16</span>
                <span>Panel 17</span>
                <span>Panel 18</span>
                <span>Panel 19</span>
                <span>Panel 20</span>
                <span>Panel 21</span>
                <span>Panel 22</span>
                <span>Panel 23</span>
                <span>Panel 24</span>
                <span>Panel 25</span>
                <span>Panel 26</span>
                <span>Panel 27</span>
                <span>Panel 28</span>
                <span>Panel 29</span>
                <span>Panel 30</span>
                <span>Panel 31</span>
                <span>Panel 32</span>
                <span>Panel 33</span>
                <span>Panel 34</span>
                <span>Panel 35</span>
                <span>Panel 36</span>
                <span>Panel 37</span>
                <span>Panel 38</span>
                <span>Panel 39</span>
                <span>Panel 40</span>
                <span>Panel 41</span>
                <span>Panel 42</span>
                <span>Panel 43</span>
                <span>Panel 44</span>
                <span>Panel 45</span>
                <span>Panel 46</span>
                <span>Panel 47</span>
                <span>Panel 48</span>
                <span>Panel 49</span>
                <span>Panel 50</span>
                <span>Panel 51</span>
                <span>Panel 52</span>
                <span>Panel 53</span>
                <span>Panel 54</span>
                <span>Panel 55</span>
                <span>Panel 56</span>
                <span>Panel 57</span>
                <span>Panel 58</span>
                <span>Panel 59</span>
                <span>Panel 60</span>
                <span>Panel 61</span>
                <span>Panel 62</span>
                <span>Panel 63</span>
                <span>Panel 64</span>
                <span>Panel 65</span>
                <span>Panel 66</span>
                <span>Panel 67</span>
                <span>Panel 68</span>
                <span>Panel 69</span>
                <span>Panel 70</span>
                <span>Panel 71</span>
                <span>Panel 72</span>
                <span>Panel 73</span>
                <span>Panel 74</span>
                <span>Panel 75</span>
                <span>Panel 76</span>
                <span>Panel 77</span>
                <span>Panel 78</span>
                <span>Panel 79</span>
                <span>Panel 80</span>
                <span>Panel 81</span>
                <span>Panel 82</span>
                <span>Panel 83</span>
                <span>Panel 84</span>
                <span>Panel 85</span>
                <span>Panel 86</span>
                <span>Panel 87</span>
                <span>Panel 88</span>
                <span>Panel 89</span>
                <span>Panel 90</span>
                <span>Panel 91</span>
                <span>Panel 92</span>
                <span>Panel 93</span>
                <span>Panel 94</span>
                <span>Panel 95</span>
                <span>Panel 96</span>
                <span>Panel 97</span>
                <span>Panel 98</span>
                <span>Panel 99</span>
            </div>
        </div>
    </div>
</div>`}));function _(){return(0,v.jsxs)(r,{children:[(0,v.jsx)(t,{children:`IRSplitContainer`}),(0,v.jsx)(n,{children:`ir-style@^2.16.0`}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`code`,{children:`IRSplitContainer`}),`을 활용하여 구역 경계를 나누고, 사이즈를 변경할 수 있게 합니다.`]}),(0,v.jsxs)(`p`,{children:[`※ 구버전은 `,(0,v.jsx)(`code`,{children:`createSplitContainer`}),` 함수 사용`]}),(0,v.jsx)(i,{docList:y}),(0,v.jsx)(a,{css:`#live_editor_wrapper { padding: 0 }`,fixedHeight:400,htmlRaw:g,code:m})]})}var v,y,b=e((()=>{h(),ne(),o(),v=s(),y=[[`/classes/_innorules_solid-ui.IRSplitContainer.html`,`IRSplitContainer`],[`/types/_innorules_solid-ui.IRSplitContainerOptions.html`,`IRSplitContainerOptions`]],_.__docgenInfo={description:``,methods:[],displayName:`Basic`}})),x,re=e((()=>{x=`import { IRSplitContainer } from "@innorules/ir-style";

/**
 * gutterClickAction, minSize 옵션을 사용하여 중첩된 splitter 생성
 */
new IRSplitContainer( {
    elements: ["#split-0", "#split-1"],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    },
} );

/**
 * gutterClickAction, minSize 옵션을 사용하여 중첩된 splitter 생성
 */
new IRSplitContainer( {
    elements: ["#split-2", "#split-3"],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    },
} );

/**
 * gutterClickAction, minSize 옵션을 사용하여 중첩된 splitter 생성
 */
new IRSplitContainer( {
    elements: ["#split-4", "#split-5"],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    },
} );`})),S,C=e((()=>{S=`<div class="border" style="height: 320px;">
    <div id="split-0"></div>
    <div id="split-1" style="display: flex; flex-direction: column">
        <div class="border-b--px" style="height: 60px"></div>
        <div style="flex: 1">
            <div id="split-2"></div>
            <div id="split-3">
                <div id="split-4"></div>
                <div id="split-5"></div>
            </div>
        </div>
    </div>
</div>`}));function w(){return(0,T.jsxs)(r,{children:[(0,T.jsx)(t,{children:`Deep Nested Case`}),(0,T.jsx)(n,{children:`ir-style@^2.14.0`}),(0,T.jsx)(`p`,{children:`중첩된 splitter 테스트`}),(0,T.jsx)(i,{docList:E}),(0,T.jsx)(a,{css:`#live_editor_wrapper { padding: 0 }`,fixedHeight:400,htmlRaw:S,code:x})]})}var T,E,ie=e((()=>{re(),C(),o(),T=s(),E=[[`/classes/_innorules_solid-ui.IRSplitContainer.html`,`IRSplitContainer`],[`/types/_innorules_solid-ui.IRSplitContainerOptions.html`,`IRSplitContainerOptions`]],w.__docgenInfo={description:``,methods:[],displayName:`DeepNestedCase`}})),D,ae=e((()=>{D=`import { IRSplitContainer } from "@innorules/ir-style";

/** options 내부 제공되는 이벤트 함수 예시 */
new IRSplitContainer( {
    elements: ["#split-0", "#split-1"],
    options: {
        onDrag: ( sizes ) => console.log( sizes ),
        onDragStart: ( sizes ) => console.log( "start : ", sizes ),
        onDragEnd: ( sizes ) => console.log( "end : ", sizes ),
    },
} );`})),O,k=e((()=>{O=`<div style="height: 100%;">
    <div id="split-0">
        <p>Panel 0</p>
        <p>Panel 1</p>
        <p>Panel 2</p>
        <p>Panel 3</p>
        <p>Panel 4</p>
        <p>Panel 5</p>
        <p>Panel 6</p>
        <p>Panel 7</p>
        <p>Panel 8</p>
        <p>Panel 9</p>
        <p>Panel 10</p>
        <p>Panel 11</p>
        <p>Panel 12</p>
        <p>Panel 13</p>
        <p>Panel 14</p>
        <p>Panel 15</p>
        <p>Panel 16</p>
        <p>Panel 17</p>
        <p>Panel 18</p>
        <p>Panel 19</p>
    </div>
    <div id="split-1">
        <span>Panel 0</span>
        <span>Panel 1</span>
        <span>Panel 2</span>
        <span>Panel 3</span>
        <span>Panel 4</span>
        <span>Panel 5</span>
        <span>Panel 6</span>
        <span>Panel 7</span>
        <span>Panel 8</span>
        <span>Panel 9</span>
        <span>Panel 10</span>
        <span>Panel 11</span>
        <span>Panel 12</span>
        <span>Panel 13</span>
        <span>Panel 14</span>
        <span>Panel 15</span>
        <span>Panel 16</span>
        <span>Panel 17</span>
        <span>Panel 18</span>
        <span>Panel 19</span>
        <span>Panel 20</span>
        <span>Panel 21</span>
        <span>Panel 22</span>
        <span>Panel 23</span>
        <span>Panel 24</span>
        <span>Panel 25</span>
        <span>Panel 26</span>
        <span>Panel 27</span>
        <span>Panel 28</span>
        <span>Panel 29</span>
        <span>Panel 30</span>
        <span>Panel 31</span>
        <span>Panel 32</span>
        <span>Panel 33</span>
        <span>Panel 34</span>
        <span>Panel 35</span>
        <span>Panel 36</span>
        <span>Panel 37</span>
        <span>Panel 38</span>
        <span>Panel 39</span>
        <span>Panel 40</span>
        <span>Panel 41</span>
        <span>Panel 42</span>
        <span>Panel 43</span>
        <span>Panel 44</span>
        <span>Panel 45</span>
        <span>Panel 46</span>
        <span>Panel 47</span>
        <span>Panel 48</span>
        <span>Panel 49</span>
        <span>Panel 50</span>
        <span>Panel 51</span>
        <span>Panel 52</span>
        <span>Panel 53</span>
        <span>Panel 54</span>
        <span>Panel 55</span>
        <span>Panel 56</span>
        <span>Panel 57</span>
        <span>Panel 58</span>
        <span>Panel 59</span>
        <span>Panel 60</span>
        <span>Panel 61</span>
        <span>Panel 62</span>
        <span>Panel 63</span>
        <span>Panel 64</span>
        <span>Panel 65</span>
        <span>Panel 66</span>
        <span>Panel 67</span>
        <span>Panel 68</span>
        <span>Panel 69</span>
        <span>Panel 70</span>
        <span>Panel 71</span>
        <span>Panel 72</span>
        <span>Panel 73</span>
        <span>Panel 74</span>
        <span>Panel 75</span>
        <span>Panel 76</span>
        <span>Panel 77</span>
        <span>Panel 78</span>
        <span>Panel 79</span>
        <span>Panel 80</span>
        <span>Panel 81</span>
        <span>Panel 82</span>
        <span>Panel 83</span>
        <span>Panel 84</span>
        <span>Panel 85</span>
        <span>Panel 86</span>
        <span>Panel 87</span>
        <span>Panel 88</span>
        <span>Panel 89</span>
        <span>Panel 90</span>
        <span>Panel 91</span>
        <span>Panel 92</span>
        <span>Panel 93</span>
        <span>Panel 94</span>
        <span>Panel 95</span>
        <span>Panel 96</span>
        <span>Panel 97</span>
        <span>Panel 98</span>
        <span>Panel 99</span>
    </div>
</div>`}));function A(){return(0,j.jsxs)(r,{children:[(0,j.jsx)(t,{children:`Event`}),(0,j.jsxs)(`p`,{children:[(0,j.jsx)(`code`,{children:`onDrag`}),` 이벤트를 이용하여 드래그 시 이벤트를 받을 수 있습니다.`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`code`,{children:`onDragStart`}),` 이벤트를 이용하여 드래그 시작 시 이벤트를 받을 수 있습니다.`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`code`,{children:`onDragEnd`}),` 이벤트를 이용하여 드래그 종료 시 이벤트를 받을 수 있습니다.`]}),(0,j.jsx)(i,{docList:M}),(0,j.jsx)(a,{css:`#live_editor_wrapper { padding: 0 }`,fixedHeight:400,htmlRaw:O,code:D})]})}var j,M,oe=e((()=>{ae(),k(),o(),j=s(),M=[[`/classes/_innorules_solid-ui.IRSplitContainer.html`,`IRSplitContainer`],[`/types/_innorules_solid-ui.IRSplitContainerOptions.html`,`IRSplitContainerOptions`]],A.__docgenInfo={description:``,methods:[],displayName:`Event`}})),N,se=e((()=>{N=`
import { IRTreeView } from "@innorules/ir-style";
import { IRGrid, IRGridRowNoHeaderCellRenderer, IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";

btnToggle.onclick = () => container.style.display = container.style.display === "none" ? "" : "none";

function createIRGrid()
{
    const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );
    const defaultRenderer = new IRGridDefaultCellRenderer();

    const grid = new IRGrid( {
        contextElement: document.getElementById( "grid" ),
        body: {
            rowCount: 10,
        },
        colHeader: {
            rowCount: 1,
            colCount: 5,
            cellRenderer: ( row, col, data ) =>
            {
                if( col > 0 )
                    data.text = col.toString();

                return defaultRenderer;
            },
        },
        rowHeader: {
            colCount: 1,
            cellRenderer: ( row, col, data ) => col === 0 ? rowNoRenderer : defaultRenderer,
        },
    } );

    return grid;
}

function createIRTreeView()
{
    const tree = new IRTreeView( {
        multiSelect: true,
        showIcon: true,
        showCheckbox: true,
        defaultIcon: "ir-icon--folder-fill",
        defaultIconColor: "var(--blue)",
        displayHeader: true,
        headerRow: {
            columnCount: 4,
            text: ["헤더", "폴더", "룰(메인)"],
            width: ["*", "48px", "70px"],
        },
        checkboxOptions: {
            layout: "column",
        },
    } );

    tree.mountElement( document.getElementById( "tree-view" ) );

    for( let i = 0; i < 50; i++ )
    {
        tree.addNode( {
            key: String( i ),
            caption: String( i ),
            columns: ["0", "4", "5"],
        } );
    }

    return tree;
}

createIRGrid();
createIRTreeView();`})),P,ce=e((()=>{P=`
import { IRSplitContainer } from "@innorules/ir-style";

btnToggle.onclick = () => container.style.display = container.style.display === "none" ? "" : "none";

new IRSplitContainer( {
    elements: ["#split-0", "#split-1", "#split-1-1", "#split-2"],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    },
} );

new IRSplitContainer( {
    elements: ["#split-01", "#split-02"],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    },
} );

new IRSplitContainer( {
    elements: ["#split-3", "#split-4"],
    options: {
        direction: "vertical",
        gutterClickAction: "toggleVisible",
        minSize: 0,
    },
} );

new IRSplitContainer( {
    elements: ["#split-5", "#split-6"],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    },
} );`})),F,le=e((()=>{F=`<div>
    <button id="btnToggle" class="button">toggle visible</button>
</div>
<div id="container" class="border" style="height: 400px;">
    <div id="split-0">
        <div id="split-01"></div>
        <div id="split-02"></div>
    </div>
    <div id="split-1">
        <div id="tree-view" style="display: grid; height: 100%"></div>
    </div>
    <div id="split-1-1">panel 2</div>
    <div id="split-2">
        <div id="split-3">
            <div id="grid"></div>
        </div>
        <div id="split-4">
            <div id="split-5">
                <p>Panel 0</p>
                <p>Panel 1</p>
                <p>Panel 2</p>
                <p>Panel 3</p>
                <p>Panel 4</p>
                <p>Panel 5</p>
                <p>Panel 6</p>
                <p>Panel 7</p>
                <p>Panel 8</p>
                <p>Panel 9</p>
                <p>Panel 10</p>
                <p>Panel 11</p>
                <p>Panel 12</p>
                <p>Panel 13</p>
                <p>Panel 14</p>
                <p>Panel 15</p>
                <p>Panel 16</p>
                <p>Panel 17</p>
                <p>Panel 18</p>
                <p>Panel 19</p>
            </div>
            <div id="split-6">
                <span>Panel 0</span>
                <span>Panel 1</span>
                <span>Panel 2</span>
                <span>Panel 3</span>
                <span>Panel 4</span>
                <span>Panel 5</span>
                <span>Panel 6</span>
                <span>Panel 7</span>
                <span>Panel 8</span>
                <span>Panel 9</span>
                <span>Panel 10</span>
                <span>Panel 11</span>
                <span>Panel 12</span>
                <span>Panel 13</span>
                <span>Panel 14</span>
                <span>Panel 15</span>
                <span>Panel 16</span>
                <span>Panel 17</span>
                <span>Panel 18</span>
                <span>Panel 19</span>
                <span>Panel 20</span>
                <span>Panel 21</span>
                <span>Panel 22</span>
                <span>Panel 23</span>
                <span>Panel 24</span>
                <span>Panel 25</span>
                <span>Panel 26</span>
                <span>Panel 27</span>
                <span>Panel 28</span>
                <span>Panel 29</span>
                <span>Panel 30</span>
                <span>Panel 31</span>
                <span>Panel 32</span>
                <span>Panel 33</span>
                <span>Panel 34</span>
                <span>Panel 35</span>
                <span>Panel 36</span>
                <span>Panel 37</span>
                <span>Panel 38</span>
                <span>Panel 39</span>
                <span>Panel 40</span>
                <span>Panel 41</span>
                <span>Panel 42</span>
                <span>Panel 43</span>
                <span>Panel 44</span>
                <span>Panel 45</span>
                <span>Panel 46</span>
                <span>Panel 47</span>
                <span>Panel 48</span>
                <span>Panel 49</span>
                <span>Panel 50</span>
                <span>Panel 51</span>
                <span>Panel 52</span>
                <span>Panel 53</span>
                <span>Panel 54</span>
                <span>Panel 55</span>
                <span>Panel 56</span>
                <span>Panel 57</span>
                <span>Panel 58</span>
                <span>Panel 59</span>
                <span>Panel 60</span>
                <span>Panel 61</span>
                <span>Panel 62</span>
                <span>Panel 63</span>
                <span>Panel 64</span>
                <span>Panel 65</span>
                <span>Panel 66</span>
                <span>Panel 67</span>
                <span>Panel 68</span>
                <span>Panel 69</span>
                <span>Panel 70</span>
                <span>Panel 71</span>
                <span>Panel 72</span>
                <span>Panel 73</span>
                <span>Panel 74</span>
                <span>Panel 75</span>
                <span>Panel 76</span>
                <span>Panel 77</span>
                <span>Panel 78</span>
                <span>Panel 79</span>
                <span>Panel 80</span>
                <span>Panel 81</span>
                <span>Panel 82</span>
                <span>Panel 83</span>
                <span>Panel 84</span>
                <span>Panel 85</span>
                <span>Panel 86</span>
                <span>Panel 87</span>
                <span>Panel 88</span>
                <span>Panel 89</span>
                <span>Panel 90</span>
                <span>Panel 91</span>
                <span>Panel 92</span>
                <span>Panel 93</span>
                <span>Panel 94</span>
                <span>Panel 95</span>
                <span>Panel 96</span>
                <span>Panel 97</span>
                <span>Panel 98</span>
                <span>Panel 99</span>
            </div>
        </div>
    </div>
</div>`}));function I(){return(0,L.jsxs)(r,{children:[(0,L.jsx)(t,{children:`GutterClickAction`}),(0,L.jsx)(n,{children:`ir-style@^2.14.0`}),(0,L.jsxs)(`p`,{children:[(0,L.jsx)(`code`,{children:"gutterClickAction: `toggleVisible`"}),` 옵션을 사용하면 첫번째 Gutter를 클릭할 때마다 좌측 패널이 자동으로 접히거나 펼쳐진다.`]}),(0,L.jsx)(i,{docList:R}),(0,L.jsx)(a,{css:`#live_editor_wrapper { padding: 0 }`,fixedHeight:500,htmlRaw:F,code:N,exampleCode:P})]})}var L,R,z=e((()=>{se(),ce(),le(),o(),L=s(),R=[[`/classes/_innorules_solid-ui.IRSplitContainer.html`,`IRSplitContainer`],[`/types/_innorules_solid-ui.IRSplitContainerOptions.html`,`IRSplitContainerOptions`]],I.__docgenInfo={description:``,methods:[],displayName:`GutterClickAction`}})),B,V=e((()=>{B=`import { IRSplitContainer } from "@innorules/ir-style";

/** 크기 설정 옵션 예시 */
new IRSplitContainer( {
    elements: ["#split-0", "#split-1"],
    options: {
        sizes: [20, 80],
        minSize: 150,
        maxSize: [700, Infinity],
    },
} );`})),H,U=e((()=>{H=`<div class="border" style="height: 240px;">
    <div id="split-0">
        <p>Panel 0</p>
        <p>Panel 1</p>
        <p>Panel 2</p>
        <p>Panel 3</p>
        <p>Panel 4</p>
        <p>Panel 5</p>
        <p>Panel 6</p>
        <p>Panel 7</p>
        <p>Panel 8</p>
        <p>Panel 9</p>
        <p>Panel 10</p>
        <p>Panel 11</p>
        <p>Panel 12</p>
        <p>Panel 13</p>
        <p>Panel 14</p>
        <p>Panel 15</p>
        <p>Panel 16</p>
        <p>Panel 17</p>
        <p>Panel 18</p>
        <p>Panel 19</p>
    </div>
    <div id="split-1">
        <span>Panel 0</span>
        <span>Panel 1</span>
        <span>Panel 2</span>
        <span>Panel 3</span>
        <span>Panel 4</span>
        <span>Panel 5</span>
        <span>Panel 6</span>
        <span>Panel 7</span>
        <span>Panel 8</span>
        <span>Panel 9</span>
        <span>Panel 10</span>
        <span>Panel 11</span>
        <span>Panel 12</span>
        <span>Panel 13</span>
        <span>Panel 14</span>
        <span>Panel 15</span>
        <span>Panel 16</span>
        <span>Panel 17</span>
        <span>Panel 18</span>
        <span>Panel 19</span>
        <span>Panel 20</span>
        <span>Panel 21</span>
        <span>Panel 22</span>
        <span>Panel 23</span>
        <span>Panel 24</span>
        <span>Panel 25</span>
        <span>Panel 26</span>
        <span>Panel 27</span>
        <span>Panel 28</span>
        <span>Panel 29</span>
        <span>Panel 30</span>
        <span>Panel 31</span>
        <span>Panel 32</span>
        <span>Panel 33</span>
        <span>Panel 34</span>
        <span>Panel 35</span>
        <span>Panel 36</span>
        <span>Panel 37</span>
        <span>Panel 38</span>
        <span>Panel 39</span>
        <span>Panel 40</span>
        <span>Panel 41</span>
        <span>Panel 42</span>
        <span>Panel 43</span>
        <span>Panel 44</span>
        <span>Panel 45</span>
        <span>Panel 46</span>
        <span>Panel 47</span>
        <span>Panel 48</span>
        <span>Panel 49</span>
        <span>Panel 50</span>
        <span>Panel 51</span>
        <span>Panel 52</span>
        <span>Panel 53</span>
        <span>Panel 54</span>
        <span>Panel 55</span>
        <span>Panel 56</span>
        <span>Panel 57</span>
        <span>Panel 58</span>
        <span>Panel 59</span>
        <span>Panel 60</span>
        <span>Panel 61</span>
        <span>Panel 62</span>
        <span>Panel 63</span>
        <span>Panel 64</span>
        <span>Panel 65</span>
        <span>Panel 66</span>
        <span>Panel 67</span>
        <span>Panel 68</span>
        <span>Panel 69</span>
        <span>Panel 70</span>
        <span>Panel 71</span>
        <span>Panel 72</span>
        <span>Panel 73</span>
        <span>Panel 74</span>
        <span>Panel 75</span>
        <span>Panel 76</span>
        <span>Panel 77</span>
        <span>Panel 78</span>
        <span>Panel 79</span>
        <span>Panel 80</span>
        <span>Panel 81</span>
        <span>Panel 82</span>
        <span>Panel 83</span>
        <span>Panel 84</span>
        <span>Panel 85</span>
        <span>Panel 86</span>
        <span>Panel 87</span>
        <span>Panel 88</span>
        <span>Panel 89</span>
        <span>Panel 90</span>
        <span>Panel 91</span>
        <span>Panel 92</span>
        <span>Panel 93</span>
        <span>Panel 94</span>
        <span>Panel 95</span>
        <span>Panel 96</span>
        <span>Panel 97</span>
        <span>Panel 98</span>
        <span>Panel 99</span>
    </div>
</div>`}));function W(){return(0,G.jsxs)(r,{children:[(0,G.jsx)(t,{children:`Size 설정`}),(0,G.jsxs)(`p`,{children:[(0,G.jsx)(`code`,{children:`sizes`}),`를 이용하여 해당 패널의 백분율 배열로 지정할 수 있고,`,(0,G.jsx)(`br`,{}),(0,G.jsx)(`code`,{children:`minSize(default: 100px), maxSize`}),`의 px를 지정하여 resize 가능한 크기 범위를 지정합니다.`,(0,G.jsx)(`br`,{}),(0,G.jsx)(`code`,{children:`Infinity`}),`는 `,(0,G.jsx)(`code`,{children:`minSize`}),`에서 사용 시 설정된 패널 초기 크기로 지정되고, `,(0,G.jsx)(`code`,{children:`maxSize`}),`에서 사용 시 무한으로 늘어날 수 있습니다.`]}),(0,G.jsx)(i,{docList:K}),(0,G.jsx)(a,{css:`#live_editor_wrapper { padding: 0 }`,htmlRaw:H,code:B})]})}var G,K,ue=e((()=>{V(),U(),o(),G=s(),K=[[`/classes/_innorules_solid-ui.IRSplitContainer.html`,`IRSplitContainer`],[`/types/_innorules_solid-ui.IRSplitContainerOptions.html`,`IRSplitContainerOptions`]],W.__docgenInfo={description:``,methods:[],displayName:`Size`}})),q,de=e((()=>{q=`import { IRSplitContainer } from "@innorules/ir-style";

new IRSplitContainer( {
    elements: ["#split-0", "#split-1", "#split-2"],
    options: { gutterCls: "thin" },
} );

new IRSplitContainer( {
    elements: ["#split-3", "#split-4"],
    options: {
        direction: "vertical",
        gutterCls: "thin",
    },
} );

new IRSplitContainer( {
    elements: ["#split-5", "#split-6"],
    options: { gutterCls: "thin" },
} );`})),J,fe=e((()=>{J=`<div class="border" style="height: 400px; overflow: auto">
    <div id="split-0">panel 1</div>
    <div id="split-1">panel 2</div>
    <div id="split-2">
        <div id="split-3">panel 3</div>
        <div id="split-4">
            <div id="split-5">
                <p>Panel 0</p>
                <p>Panel 1</p>
                <p>Panel 2</p>
                <p>Panel 3</p>
                <p>Panel 4</p>
                <p>Panel 5</p>
                <p>Panel 6</p>
                <p>Panel 7</p>
                <p>Panel 8</p>
                <p>Panel 9</p>
                <p>Panel 10</p>
                <p>Panel 11</p>
                <p>Panel 12</p>
                <p>Panel 13</p>
                <p>Panel 14</p>
                <p>Panel 15</p>
                <p>Panel 16</p>
                <p>Panel 17</p>
                <p>Panel 18</p>
                <p>Panel 19</p>
            </div>
            <div id="split-6">
                <span>Panel 0</span>
                <span>Panel 1</span>
                <span>Panel 2</span>
                <span>Panel 3</span>
                <span>Panel 4</span>
                <span>Panel 5</span>
                <span>Panel 6</span>
                <span>Panel 7</span>
                <span>Panel 8</span>
                <span>Panel 9</span>
                <span>Panel 10</span>
                <span>Panel 11</span>
                <span>Panel 12</span>
                <span>Panel 13</span>
                <span>Panel 14</span>
                <span>Panel 15</span>
                <span>Panel 16</span>
                <span>Panel 17</span>
                <span>Panel 18</span>
                <span>Panel 19</span>
                <span>Panel 20</span>
                <span>Panel 21</span>
                <span>Panel 22</span>
                <span>Panel 23</span>
                <span>Panel 24</span>
                <span>Panel 25</span>
                <span>Panel 26</span>
                <span>Panel 27</span>
                <span>Panel 28</span>
                <span>Panel 29</span>
                <span>Panel 30</span>
                <span>Panel 31</span>
                <span>Panel 32</span>
                <span>Panel 33</span>
                <span>Panel 34</span>
                <span>Panel 35</span>
                <span>Panel 36</span>
                <span>Panel 37</span>
                <span>Panel 38</span>
                <span>Panel 39</span>
                <span>Panel 40</span>
                <span>Panel 41</span>
                <span>Panel 42</span>
                <span>Panel 43</span>
                <span>Panel 44</span>
                <span>Panel 45</span>
                <span>Panel 46</span>
                <span>Panel 47</span>
                <span>Panel 48</span>
                <span>Panel 49</span>
                <span>Panel 50</span>
                <span>Panel 51</span>
                <span>Panel 52</span>
                <span>Panel 53</span>
                <span>Panel 54</span>
                <span>Panel 55</span>
                <span>Panel 56</span>
                <span>Panel 57</span>
                <span>Panel 58</span>
                <span>Panel 59</span>
                <span>Panel 60</span>
                <span>Panel 61</span>
                <span>Panel 62</span>
                <span>Panel 63</span>
                <span>Panel 64</span>
                <span>Panel 65</span>
                <span>Panel 66</span>
                <span>Panel 67</span>
                <span>Panel 68</span>
                <span>Panel 69</span>
                <span>Panel 70</span>
                <span>Panel 71</span>
                <span>Panel 72</span>
                <span>Panel 73</span>
                <span>Panel 74</span>
                <span>Panel 75</span>
                <span>Panel 76</span>
                <span>Panel 77</span>
                <span>Panel 78</span>
                <span>Panel 79</span>
                <span>Panel 80</span>
                <span>Panel 81</span>
                <span>Panel 82</span>
                <span>Panel 83</span>
                <span>Panel 84</span>
                <span>Panel 85</span>
                <span>Panel 86</span>
                <span>Panel 87</span>
                <span>Panel 88</span>
                <span>Panel 89</span>
                <span>Panel 90</span>
                <span>Panel 91</span>
                <span>Panel 92</span>
                <span>Panel 93</span>
                <span>Panel 94</span>
                <span>Panel 95</span>
                <span>Panel 96</span>
                <span>Panel 97</span>
                <span>Panel 98</span>
                <span>Panel 99</span>
            </div>
        </div>
    </div>
</div>`}));function Y(){return(0,X.jsxs)(r,{children:[(0,X.jsx)(t,{children:`IRSplitContainer`}),(0,X.jsxs)(`p`,{children:[(0,X.jsx)(`code`,{children:"gutterCls: `thin`"}),` 옵션을 사용하면 thin 스타일을 적용하여 얇은 영역 나누기가 가능합니다.`]}),(0,X.jsx)(i,{docList:Z}),(0,X.jsx)(a,{css:`#live_editor_wrapper { padding: 0 }`,fixedHeight:480,htmlRaw:J,code:q})]})}var X,Z,pe=e((()=>{de(),fe(),o(),X=s(),Z=[[`/classes/_innorules_solid-ui.IRSplitContainer.html`,`IRSplitContainer`],[`/types/_innorules_solid-ui.IRSplitContainerOptions.html`,`IRSplitContainerOptions`]],Y.__docgenInfo={description:``,methods:[],displayName:`ThinStyle`}})),Q,$;e((()=>{te(),b(),ie(),oe(),z(),ue(),pe(),Q={title:`JS Components/IRSplitContainer`},$=[`API`,`Basic`,`DeepNestedCase`,`Event`,`GutterClickAction`,`Size`,`ThinStyle`]}))();export{d as API,_ as Basic,w as DeepNestedCase,A as Event,I as GutterClickAction,W as Size,Y as ThinStyle,$ as __namedExportsOrder,Q as default};