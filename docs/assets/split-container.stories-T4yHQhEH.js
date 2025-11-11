import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as a,a as p,c as s,L as e,V as r}from"./version-tag-DqccibA3.js";import"./iframe-D3tc5L3-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQMUxHhF.js";const l=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
const split = new IRSplitContainer( { elements: ["#split-0", "#split-1"] } );\r
\r
/** getSizes API 예시 */\r
btn1.onclick = () => alert( split.getSizes() );\r
\r
/** collapse API 예시 */\r
btn2.onclick = () => split.collapse( 0 );\r
\r
/** destroy API 예시 */\r
btn3.onclick = () => split.destroy();\r
\r
split.setSizes( [25, 75] );`,i=`<div class="ir-flex ir-gap-x-xxs ir-p-xs" style="border-bottom: 1px solid var(--border-color);">\r
    <button id="btn1" class="button">Get Size</button>\r
    <button id="btn2" class="button">Collapse</button>\r
    <button id="btn3" class="button">Destroy</button>\r
</div>\r
<div style="height: 100%;">\r
    <div id="split-0">\r
        <p>Panel 0</p>\r
        <p>Panel 1</p>\r
        <p>Panel 2</p>\r
        <p>Panel 3</p>\r
        <p>Panel 4</p>\r
        <p>Panel 5</p>\r
        <p>Panel 6</p>\r
        <p>Panel 7</p>\r
        <p>Panel 8</p>\r
        <p>Panel 9</p>\r
        <p>Panel 10</p>\r
        <p>Panel 11</p>\r
        <p>Panel 12</p>\r
        <p>Panel 13</p>\r
        <p>Panel 14</p>\r
        <p>Panel 15</p>\r
        <p>Panel 16</p>\r
        <p>Panel 17</p>\r
        <p>Panel 18</p>\r
        <p>Panel 19</p>\r
    </div>\r
    <div id="split-1">\r
        <span>Panel 0</span>\r
        <span>Panel 1</span>\r
        <span>Panel 2</span>\r
        <span>Panel 3</span>\r
        <span>Panel 4</span>\r
        <span>Panel 5</span>\r
        <span>Panel 6</span>\r
        <span>Panel 7</span>\r
        <span>Panel 8</span>\r
        <span>Panel 9</span>\r
        <span>Panel 10</span>\r
        <span>Panel 11</span>\r
        <span>Panel 12</span>\r
        <span>Panel 13</span>\r
        <span>Panel 14</span>\r
        <span>Panel 15</span>\r
        <span>Panel 16</span>\r
        <span>Panel 17</span>\r
        <span>Panel 18</span>\r
        <span>Panel 19</span>\r
        <span>Panel 20</span>\r
        <span>Panel 21</span>\r
        <span>Panel 22</span>\r
        <span>Panel 23</span>\r
        <span>Panel 24</span>\r
        <span>Panel 25</span>\r
        <span>Panel 26</span>\r
        <span>Panel 27</span>\r
        <span>Panel 28</span>\r
        <span>Panel 29</span>\r
        <span>Panel 30</span>\r
        <span>Panel 31</span>\r
        <span>Panel 32</span>\r
        <span>Panel 33</span>\r
        <span>Panel 34</span>\r
        <span>Panel 35</span>\r
        <span>Panel 36</span>\r
        <span>Panel 37</span>\r
        <span>Panel 38</span>\r
        <span>Panel 39</span>\r
        <span>Panel 40</span>\r
        <span>Panel 41</span>\r
        <span>Panel 42</span>\r
        <span>Panel 43</span>\r
        <span>Panel 44</span>\r
        <span>Panel 45</span>\r
        <span>Panel 46</span>\r
        <span>Panel 47</span>\r
        <span>Panel 48</span>\r
        <span>Panel 49</span>\r
        <span>Panel 50</span>\r
        <span>Panel 51</span>\r
        <span>Panel 52</span>\r
        <span>Panel 53</span>\r
        <span>Panel 54</span>\r
        <span>Panel 55</span>\r
        <span>Panel 56</span>\r
        <span>Panel 57</span>\r
        <span>Panel 58</span>\r
        <span>Panel 59</span>\r
        <span>Panel 60</span>\r
        <span>Panel 61</span>\r
        <span>Panel 62</span>\r
        <span>Panel 63</span>\r
        <span>Panel 64</span>\r
        <span>Panel 65</span>\r
        <span>Panel 66</span>\r
        <span>Panel 67</span>\r
        <span>Panel 68</span>\r
        <span>Panel 69</span>\r
        <span>Panel 70</span>\r
        <span>Panel 71</span>\r
        <span>Panel 72</span>\r
        <span>Panel 73</span>\r
        <span>Panel 74</span>\r
        <span>Panel 75</span>\r
        <span>Panel 76</span>\r
        <span>Panel 77</span>\r
        <span>Panel 78</span>\r
        <span>Panel 79</span>\r
        <span>Panel 80</span>\r
        <span>Panel 81</span>\r
        <span>Panel 82</span>\r
        <span>Panel 83</span>\r
        <span>Panel 84</span>\r
        <span>Panel 85</span>\r
        <span>Panel 86</span>\r
        <span>Panel 87</span>\r
        <span>Panel 88</span>\r
        <span>Panel 89</span>\r
        <span>Panel 90</span>\r
        <span>Panel 91</span>\r
        <span>Panel 92</span>\r
        <span>Panel 93</span>\r
        <span>Panel 94</span>\r
        <span>Panel 95</span>\r
        <span>Panel 96</span>\r
        <span>Panel 97</span>\r
        <span>Panel 98</span>\r
        <span>Panel 99</span>\r
    </div>\r
</div>`,P=[["/classes/_innorules_ir-style.index.IRSplitContainer.html","IRSplitContainer"]];function t(){return n.jsxs(a,{children:[n.jsx(p,{children:"API"}),n.jsxs("p",{children:[n.jsx("code",{children:"setSizes([25, 75])"})," 백분율 배열로, 분할 요소의 크기를 업데이트할 수 있습니다.",n.jsx("br",{}),n.jsx("code",{children:"getSizes"})," resize된 백분율 배열을 반환합니다.",n.jsx("br",{}),n.jsx("code",{children:"collapse(index)"})," 설정된 minSize의 크기로 요소의 크기를 변경합니다. (모든 요소는 앞쪽, 위쪽으로 축소됨)",n.jsx("br",{}),n.jsx("code",{children:"destroy"})," split을 제거합니다."]}),n.jsx(s,{docList:P}),n.jsx(e,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:i,code:l})]})}t.__docgenInfo={description:"",methods:[],displayName:"API"};const o=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
new IRSplitContainer( {\r
    elements: ["#split-0", "#split-1", "#split-2"],\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-3", "#split-4"],\r
    options: {\r
        direction: "vertical",\r
        gutterCls: "thin",\r
        // 패널을 드래그할 때 크기 변화가 반영되는 최소 단위 설정 (기본값 5)\r
        dragInterval: 10,\r
    },\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-5", "#split-6"],\r
} );`,d=`<div style="height: 100%;">\r
    <div id="split-0">panel 1</div>\r
    <div id="split-1">panel 2</div>\r
    <div id="split-2">\r
        <div id="split-3">panel 3</div>\r
        <div id="split-4">\r
            <div id="split-5">\r
                <p>Panel 0</p>\r
                <p>Panel 1</p>\r
                <p>Panel 2</p>\r
                <p>Panel 3</p>\r
                <p>Panel 4</p>\r
                <p>Panel 5</p>\r
                <p>Panel 6</p>\r
                <p>Panel 7</p>\r
                <p>Panel 8</p>\r
                <p>Panel 9</p>\r
                <p>Panel 10</p>\r
                <p>Panel 11</p>\r
                <p>Panel 12</p>\r
                <p>Panel 13</p>\r
                <p>Panel 14</p>\r
                <p>Panel 15</p>\r
                <p>Panel 16</p>\r
                <p>Panel 17</p>\r
                <p>Panel 18</p>\r
                <p>Panel 19</p>\r
            </div>\r
            <div id="split-6">\r
                <span>Panel 0</span>\r
                <span>Panel 1</span>\r
                <span>Panel 2</span>\r
                <span>Panel 3</span>\r
                <span>Panel 4</span>\r
                <span>Panel 5</span>\r
                <span>Panel 6</span>\r
                <span>Panel 7</span>\r
                <span>Panel 8</span>\r
                <span>Panel 9</span>\r
                <span>Panel 10</span>\r
                <span>Panel 11</span>\r
                <span>Panel 12</span>\r
                <span>Panel 13</span>\r
                <span>Panel 14</span>\r
                <span>Panel 15</span>\r
                <span>Panel 16</span>\r
                <span>Panel 17</span>\r
                <span>Panel 18</span>\r
                <span>Panel 19</span>\r
                <span>Panel 20</span>\r
                <span>Panel 21</span>\r
                <span>Panel 22</span>\r
                <span>Panel 23</span>\r
                <span>Panel 24</span>\r
                <span>Panel 25</span>\r
                <span>Panel 26</span>\r
                <span>Panel 27</span>\r
                <span>Panel 28</span>\r
                <span>Panel 29</span>\r
                <span>Panel 30</span>\r
                <span>Panel 31</span>\r
                <span>Panel 32</span>\r
                <span>Panel 33</span>\r
                <span>Panel 34</span>\r
                <span>Panel 35</span>\r
                <span>Panel 36</span>\r
                <span>Panel 37</span>\r
                <span>Panel 38</span>\r
                <span>Panel 39</span>\r
                <span>Panel 40</span>\r
                <span>Panel 41</span>\r
                <span>Panel 42</span>\r
                <span>Panel 43</span>\r
                <span>Panel 44</span>\r
                <span>Panel 45</span>\r
                <span>Panel 46</span>\r
                <span>Panel 47</span>\r
                <span>Panel 48</span>\r
                <span>Panel 49</span>\r
                <span>Panel 50</span>\r
                <span>Panel 51</span>\r
                <span>Panel 52</span>\r
                <span>Panel 53</span>\r
                <span>Panel 54</span>\r
                <span>Panel 55</span>\r
                <span>Panel 56</span>\r
                <span>Panel 57</span>\r
                <span>Panel 58</span>\r
                <span>Panel 59</span>\r
                <span>Panel 60</span>\r
                <span>Panel 61</span>\r
                <span>Panel 62</span>\r
                <span>Panel 63</span>\r
                <span>Panel 64</span>\r
                <span>Panel 65</span>\r
                <span>Panel 66</span>\r
                <span>Panel 67</span>\r
                <span>Panel 68</span>\r
                <span>Panel 69</span>\r
                <span>Panel 70</span>\r
                <span>Panel 71</span>\r
                <span>Panel 72</span>\r
                <span>Panel 73</span>\r
                <span>Panel 74</span>\r
                <span>Panel 75</span>\r
                <span>Panel 76</span>\r
                <span>Panel 77</span>\r
                <span>Panel 78</span>\r
                <span>Panel 79</span>\r
                <span>Panel 80</span>\r
                <span>Panel 81</span>\r
                <span>Panel 82</span>\r
                <span>Panel 83</span>\r
                <span>Panel 84</span>\r
                <span>Panel 85</span>\r
                <span>Panel 86</span>\r
                <span>Panel 87</span>\r
                <span>Panel 88</span>\r
                <span>Panel 89</span>\r
                <span>Panel 90</span>\r
                <span>Panel 91</span>\r
                <span>Panel 92</span>\r
                <span>Panel 93</span>\r
                <span>Panel 94</span>\r
                <span>Panel 95</span>\r
                <span>Panel 96</span>\r
                <span>Panel 97</span>\r
                <span>Panel 98</span>\r
                <span>Panel 99</span>\r
            </div>\r
        </div>\r
    </div>\r
</div>`,c=[["/classes/_innorules_ir-style.index.IRSplitContainer.html","IRSplitContainer"],["/types/_innorules_ir-style.index.IRSplitContainerOptions.html","IRSplitContainerOptions"]];function v(){return n.jsxs(a,{children:[n.jsx(p,{children:"IRSplitContainer"}),n.jsx(r,{children:"ir-style@^2.16.0"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRSplitContainer"}),"을 활용하여 구역 경계를 나누고, 사이즈를 변경할 수 있게 합니다."]}),n.jsxs("p",{children:["※ 구버전은 ",n.jsx("code",{children:"createSplitContainer"})," 함수 사용"]}),n.jsx(s,{docList:c}),n.jsx(e,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:d,code:o})]})}v.__docgenInfo={description:"",methods:[],displayName:"Basic"};const m=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
/**\r
 * gutterClickAction, minSize 옵션을 사용하여 중첩된 splitter 생성\r
 */\r
new IRSplitContainer( {\r
    elements: ["#split-0", "#split-1"],\r
    options: {\r
        gutterClickAction: "toggleVisible",\r
        minSize: 0,\r
    },\r
} );\r
\r
/**\r
 * gutterClickAction, minSize 옵션을 사용하여 중첩된 splitter 생성\r
 */\r
new IRSplitContainer( {\r
    elements: ["#split-2", "#split-3"],\r
    options: {\r
        gutterClickAction: "toggleVisible",\r
        minSize: 0,\r
    },\r
} );\r
\r
/**\r
 * gutterClickAction, minSize 옵션을 사용하여 중첩된 splitter 생성\r
 */\r
new IRSplitContainer( {\r
    elements: ["#split-4", "#split-5"],\r
    options: {\r
        gutterClickAction: "toggleVisible",\r
        minSize: 0,\r
    },\r
} );`,x=`<div class="border" style="height: 320px;">\r
    <div id="split-0"></div>\r
    <div id="split-1" style="display: flex; flex-direction: column">\r
        <div class="border-b--px" style="height: 60px"></div>\r
        <div style="flex: 1">\r
            <div id="split-2"></div>\r
            <div id="split-3">\r
                <div id="split-4"></div>\r
                <div id="split-5"></div>\r
            </div>\r
        </div>\r
    </div>\r
</div>`,h=[["/classes/_innorules_ir-style.index.IRSplitContainer.html","IRSplitContainer"],["/types/_innorules_ir-style.index.IRSplitContainerOptions.html","IRSplitContainerOptions"]];function u(){return n.jsxs(a,{children:[n.jsx(p,{children:"Deep Nested Case"}),n.jsx(r,{children:"ir-style@^2.14.0"}),n.jsx("p",{children:"중첩된 splitter 테스트"}),n.jsx(s,{docList:h}),n.jsx(e,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:x,code:m})]})}u.__docgenInfo={description:"",methods:[],displayName:"DeepNestedCase"};const C=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
/** options 내부 제공되는 이벤트 함수 예시 */\r
new IRSplitContainer( {\r
    elements: ["#split-0", "#split-1"],\r
    options: {\r
        onDrag: ( sizes ) => console.log( sizes ),\r
        onDragStart: ( sizes ) => console.log( "start : ", sizes ),\r
        onDragEnd: ( sizes ) => console.log( "end : ", sizes ),\r
    },\r
} );`,R=`<div style="height: 100%;">\r
    <div id="split-0">\r
        <p>Panel 0</p>\r
        <p>Panel 1</p>\r
        <p>Panel 2</p>\r
        <p>Panel 3</p>\r
        <p>Panel 4</p>\r
        <p>Panel 5</p>\r
        <p>Panel 6</p>\r
        <p>Panel 7</p>\r
        <p>Panel 8</p>\r
        <p>Panel 9</p>\r
        <p>Panel 10</p>\r
        <p>Panel 11</p>\r
        <p>Panel 12</p>\r
        <p>Panel 13</p>\r
        <p>Panel 14</p>\r
        <p>Panel 15</p>\r
        <p>Panel 16</p>\r
        <p>Panel 17</p>\r
        <p>Panel 18</p>\r
        <p>Panel 19</p>\r
    </div>\r
    <div id="split-1">\r
        <span>Panel 0</span>\r
        <span>Panel 1</span>\r
        <span>Panel 2</span>\r
        <span>Panel 3</span>\r
        <span>Panel 4</span>\r
        <span>Panel 5</span>\r
        <span>Panel 6</span>\r
        <span>Panel 7</span>\r
        <span>Panel 8</span>\r
        <span>Panel 9</span>\r
        <span>Panel 10</span>\r
        <span>Panel 11</span>\r
        <span>Panel 12</span>\r
        <span>Panel 13</span>\r
        <span>Panel 14</span>\r
        <span>Panel 15</span>\r
        <span>Panel 16</span>\r
        <span>Panel 17</span>\r
        <span>Panel 18</span>\r
        <span>Panel 19</span>\r
        <span>Panel 20</span>\r
        <span>Panel 21</span>\r
        <span>Panel 22</span>\r
        <span>Panel 23</span>\r
        <span>Panel 24</span>\r
        <span>Panel 25</span>\r
        <span>Panel 26</span>\r
        <span>Panel 27</span>\r
        <span>Panel 28</span>\r
        <span>Panel 29</span>\r
        <span>Panel 30</span>\r
        <span>Panel 31</span>\r
        <span>Panel 32</span>\r
        <span>Panel 33</span>\r
        <span>Panel 34</span>\r
        <span>Panel 35</span>\r
        <span>Panel 36</span>\r
        <span>Panel 37</span>\r
        <span>Panel 38</span>\r
        <span>Panel 39</span>\r
        <span>Panel 40</span>\r
        <span>Panel 41</span>\r
        <span>Panel 42</span>\r
        <span>Panel 43</span>\r
        <span>Panel 44</span>\r
        <span>Panel 45</span>\r
        <span>Panel 46</span>\r
        <span>Panel 47</span>\r
        <span>Panel 48</span>\r
        <span>Panel 49</span>\r
        <span>Panel 50</span>\r
        <span>Panel 51</span>\r
        <span>Panel 52</span>\r
        <span>Panel 53</span>\r
        <span>Panel 54</span>\r
        <span>Panel 55</span>\r
        <span>Panel 56</span>\r
        <span>Panel 57</span>\r
        <span>Panel 58</span>\r
        <span>Panel 59</span>\r
        <span>Panel 60</span>\r
        <span>Panel 61</span>\r
        <span>Panel 62</span>\r
        <span>Panel 63</span>\r
        <span>Panel 64</span>\r
        <span>Panel 65</span>\r
        <span>Panel 66</span>\r
        <span>Panel 67</span>\r
        <span>Panel 68</span>\r
        <span>Panel 69</span>\r
        <span>Panel 70</span>\r
        <span>Panel 71</span>\r
        <span>Panel 72</span>\r
        <span>Panel 73</span>\r
        <span>Panel 74</span>\r
        <span>Panel 75</span>\r
        <span>Panel 76</span>\r
        <span>Panel 77</span>\r
        <span>Panel 78</span>\r
        <span>Panel 79</span>\r
        <span>Panel 80</span>\r
        <span>Panel 81</span>\r
        <span>Panel 82</span>\r
        <span>Panel 83</span>\r
        <span>Panel 84</span>\r
        <span>Panel 85</span>\r
        <span>Panel 86</span>\r
        <span>Panel 87</span>\r
        <span>Panel 88</span>\r
        <span>Panel 89</span>\r
        <span>Panel 90</span>\r
        <span>Panel 91</span>\r
        <span>Panel 92</span>\r
        <span>Panel 93</span>\r
        <span>Panel 94</span>\r
        <span>Panel 95</span>\r
        <span>Panel 96</span>\r
        <span>Panel 97</span>\r
        <span>Panel 98</span>\r
        <span>Panel 99</span>\r
    </div>\r
</div>`,g=[["/classes/_innorules_ir-style.index.IRSplitContainer.html","IRSplitContainer"],["/types/_innorules_ir-style.index.IRSplitContainerOptions.html","IRSplitContainerOptions"]];function S(){return n.jsxs(a,{children:[n.jsx(p,{children:"Event"}),n.jsxs("p",{children:[n.jsx("code",{children:"onDrag"})," 이벤트를 이용하여 드래그 시 이벤트를 받을 수 있습니다.",n.jsx("br",{}),n.jsx("code",{children:"onDragStart"})," 이벤트를 이용하여 드래그 시작 시 이벤트를 받을 수 있습니다.",n.jsx("br",{}),n.jsx("code",{children:"onDragEnd"})," 이벤트를 이용하여 드래그 종료 시 이벤트를 받을 수 있습니다."]}),n.jsx(s,{docList:g}),n.jsx(e,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:R,code:C})]})}S.__docgenInfo={description:"",methods:[],displayName:"Event"};const I=`\r
import { IRSplitContainer, IRTreeView } from "@innorules/ir-style";\r
import { IRGrid, IRGridRowNoHeaderCellRenderer, IRGridDefaultCellRenderer } from "@innorules/ir-style/lib/esm/grid.js";\r
\r
btnToggle.onclick = () => container.style.display = container.style.display === "none" ? "" : "none";\r
\r
function createIRGrid()\r
{\r
    const rowNoRenderer = new IRGridRowNoHeaderCellRenderer( 1 );\r
    const defaultRenderer = new IRGridDefaultCellRenderer();\r
\r
    const grid = new IRGrid( {\r
        contextElement: document.getElementById( "grid" ),\r
        body: {\r
            rowCount: 10,\r
        },\r
        colHeader: {\r
            rowCount: 1,\r
            colCount: 5,\r
            cellRenderer: ( row, col, data ) =>\r
            {\r
                if( col > 0 )\r
                    data.text = col.toString();\r
\r
                return defaultRenderer;\r
            },\r
        },\r
        rowHeader: {\r
            colCount: 1,\r
            cellRenderer: ( row, col, data ) => col === 0 ? rowNoRenderer : defaultRenderer,\r
        },\r
    } );\r
\r
    return grid;\r
}\r
\r
function createIRTreeView()\r
{\r
    const tree = new IRTreeView( {\r
        multiSelect: true,\r
        showIcon: true,\r
        showCheckbox: true,\r
        defaultIcon: "ir-icon--folder-fill",\r
        defaultIconColor: "var(--blue)",\r
        displayHeader: true,\r
        headerRow: {\r
            columnCount: 4,\r
            text: ["헤더", "폴더", "룰(메인)"],\r
            width: ["*", "48px", "70px"],\r
        },\r
        checkboxOptions: {\r
            layout: "column",\r
        },\r
    } );\r
\r
    tree.mountElement( document.getElementById( "tree-view" ) );\r
\r
    for( let i = 0; i < 50; i++ )\r
    {\r
        tree.addNode( {\r
            key: String( i ),\r
            caption: String( i ),\r
            columns: ["0", "4", "5"],\r
        } );\r
    }\r
\r
    return tree;\r
}\r
\r
createIRGrid();\r
createIRTreeView();`,y=`\r
import { IRSplitContainer } from "@innorules/ir-style";\r
\r
btnToggle.onclick = () => container.style.display = container.style.display === "none" ? "" : "none";\r
\r
new IRSplitContainer( {\r
    elements: ["#split-0", "#split-1", "#split-1-1", "#split-2"],\r
    options: {\r
        gutterClickAction: "toggleVisible",\r
        minSize: 0,\r
    },\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-01", "#split-02"],\r
    options: {\r
        gutterClickAction: "toggleVisible",\r
        minSize: 0,\r
    },\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-3", "#split-4"],\r
    options: {\r
        direction: "vertical",\r
        gutterClickAction: "toggleVisible",\r
        minSize: 0,\r
    },\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-5", "#split-6"],\r
    options: {\r
        gutterClickAction: "toggleVisible",\r
        minSize: 0,\r
    },\r
} );`,j=`<div>\r
    <button id="btnToggle" class="button">toggle visible</button>\r
</div>\r
<div id="container" class="border" style="height: 400px;">\r
    <div id="split-0">\r
        <div id="split-01"></div>\r
        <div id="split-02"></div>\r
    </div>\r
    <div id="split-1">\r
        <div id="tree-view" style="display: grid; height: 100%"></div>\r
    </div>\r
    <div id="split-1-1">panel 2</div>\r
    <div id="split-2">\r
        <div id="split-3">\r
            <div id="grid"></div>\r
        </div>\r
        <div id="split-4">\r
            <div id="split-5">\r
                <p>Panel 0</p>\r
                <p>Panel 1</p>\r
                <p>Panel 2</p>\r
                <p>Panel 3</p>\r
                <p>Panel 4</p>\r
                <p>Panel 5</p>\r
                <p>Panel 6</p>\r
                <p>Panel 7</p>\r
                <p>Panel 8</p>\r
                <p>Panel 9</p>\r
                <p>Panel 10</p>\r
                <p>Panel 11</p>\r
                <p>Panel 12</p>\r
                <p>Panel 13</p>\r
                <p>Panel 14</p>\r
                <p>Panel 15</p>\r
                <p>Panel 16</p>\r
                <p>Panel 17</p>\r
                <p>Panel 18</p>\r
                <p>Panel 19</p>\r
            </div>\r
            <div id="split-6">\r
                <span>Panel 0</span>\r
                <span>Panel 1</span>\r
                <span>Panel 2</span>\r
                <span>Panel 3</span>\r
                <span>Panel 4</span>\r
                <span>Panel 5</span>\r
                <span>Panel 6</span>\r
                <span>Panel 7</span>\r
                <span>Panel 8</span>\r
                <span>Panel 9</span>\r
                <span>Panel 10</span>\r
                <span>Panel 11</span>\r
                <span>Panel 12</span>\r
                <span>Panel 13</span>\r
                <span>Panel 14</span>\r
                <span>Panel 15</span>\r
                <span>Panel 16</span>\r
                <span>Panel 17</span>\r
                <span>Panel 18</span>\r
                <span>Panel 19</span>\r
                <span>Panel 20</span>\r
                <span>Panel 21</span>\r
                <span>Panel 22</span>\r
                <span>Panel 23</span>\r
                <span>Panel 24</span>\r
                <span>Panel 25</span>\r
                <span>Panel 26</span>\r
                <span>Panel 27</span>\r
                <span>Panel 28</span>\r
                <span>Panel 29</span>\r
                <span>Panel 30</span>\r
                <span>Panel 31</span>\r
                <span>Panel 32</span>\r
                <span>Panel 33</span>\r
                <span>Panel 34</span>\r
                <span>Panel 35</span>\r
                <span>Panel 36</span>\r
                <span>Panel 37</span>\r
                <span>Panel 38</span>\r
                <span>Panel 39</span>\r
                <span>Panel 40</span>\r
                <span>Panel 41</span>\r
                <span>Panel 42</span>\r
                <span>Panel 43</span>\r
                <span>Panel 44</span>\r
                <span>Panel 45</span>\r
                <span>Panel 46</span>\r
                <span>Panel 47</span>\r
                <span>Panel 48</span>\r
                <span>Panel 49</span>\r
                <span>Panel 50</span>\r
                <span>Panel 51</span>\r
                <span>Panel 52</span>\r
                <span>Panel 53</span>\r
                <span>Panel 54</span>\r
                <span>Panel 55</span>\r
                <span>Panel 56</span>\r
                <span>Panel 57</span>\r
                <span>Panel 58</span>\r
                <span>Panel 59</span>\r
                <span>Panel 60</span>\r
                <span>Panel 61</span>\r
                <span>Panel 62</span>\r
                <span>Panel 63</span>\r
                <span>Panel 64</span>\r
                <span>Panel 65</span>\r
                <span>Panel 66</span>\r
                <span>Panel 67</span>\r
                <span>Panel 68</span>\r
                <span>Panel 69</span>\r
                <span>Panel 70</span>\r
                <span>Panel 71</span>\r
                <span>Panel 72</span>\r
                <span>Panel 73</span>\r
                <span>Panel 74</span>\r
                <span>Panel 75</span>\r
                <span>Panel 76</span>\r
                <span>Panel 77</span>\r
                <span>Panel 78</span>\r
                <span>Panel 79</span>\r
                <span>Panel 80</span>\r
                <span>Panel 81</span>\r
                <span>Panel 82</span>\r
                <span>Panel 83</span>\r
                <span>Panel 84</span>\r
                <span>Panel 85</span>\r
                <span>Panel 86</span>\r
                <span>Panel 87</span>\r
                <span>Panel 88</span>\r
                <span>Panel 89</span>\r
                <span>Panel 90</span>\r
                <span>Panel 91</span>\r
                <span>Panel 92</span>\r
                <span>Panel 93</span>\r
                <span>Panel 94</span>\r
                <span>Panel 95</span>\r
                <span>Panel 96</span>\r
                <span>Panel 97</span>\r
                <span>Panel 98</span>\r
                <span>Panel 99</span>\r
            </div>\r
        </div>\r
    </div>\r
</div>`,w=[["/classes/_innorules_ir-style.index.IRSplitContainer.html","IRSplitContainer"],["/types/_innorules_ir-style.index.IRSplitContainerOptions.html","IRSplitContainerOptions"]];function _(){return n.jsxs(a,{children:[n.jsx(p,{children:"GutterClickAction"}),n.jsx(r,{children:"ir-style@^2.14.0"}),n.jsxs("p",{children:[n.jsx("code",{children:"gutterClickAction: `toggleVisible`"})," 옵션을 사용하면 첫번째 Gutter를 클릭할 때마다 좌측 패널이 자동으로 접히거나 펼쳐진다."]}),n.jsx(s,{docList:w}),n.jsx(e,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:500,htmlRaw:j,code:I,exampleCode:y})]})}_.__docgenInfo={description:"",methods:[],displayName:"GutterClickAction"};const f=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
/** 크기 설정 옵션 예시 */\r
new IRSplitContainer( {\r
    elements: ["#split-0", "#split-1"],\r
    options: {\r
        sizes: [20, 80],\r
        minSize: 150,\r
        maxSize: [700, Infinity],\r
    },\r
} );`,b=`<div class="border" style="height: 240px;">\r
    <div id="split-0">\r
        <p>Panel 0</p>\r
        <p>Panel 1</p>\r
        <p>Panel 2</p>\r
        <p>Panel 3</p>\r
        <p>Panel 4</p>\r
        <p>Panel 5</p>\r
        <p>Panel 6</p>\r
        <p>Panel 7</p>\r
        <p>Panel 8</p>\r
        <p>Panel 9</p>\r
        <p>Panel 10</p>\r
        <p>Panel 11</p>\r
        <p>Panel 12</p>\r
        <p>Panel 13</p>\r
        <p>Panel 14</p>\r
        <p>Panel 15</p>\r
        <p>Panel 16</p>\r
        <p>Panel 17</p>\r
        <p>Panel 18</p>\r
        <p>Panel 19</p>\r
    </div>\r
    <div id="split-1">\r
        <span>Panel 0</span>\r
        <span>Panel 1</span>\r
        <span>Panel 2</span>\r
        <span>Panel 3</span>\r
        <span>Panel 4</span>\r
        <span>Panel 5</span>\r
        <span>Panel 6</span>\r
        <span>Panel 7</span>\r
        <span>Panel 8</span>\r
        <span>Panel 9</span>\r
        <span>Panel 10</span>\r
        <span>Panel 11</span>\r
        <span>Panel 12</span>\r
        <span>Panel 13</span>\r
        <span>Panel 14</span>\r
        <span>Panel 15</span>\r
        <span>Panel 16</span>\r
        <span>Panel 17</span>\r
        <span>Panel 18</span>\r
        <span>Panel 19</span>\r
        <span>Panel 20</span>\r
        <span>Panel 21</span>\r
        <span>Panel 22</span>\r
        <span>Panel 23</span>\r
        <span>Panel 24</span>\r
        <span>Panel 25</span>\r
        <span>Panel 26</span>\r
        <span>Panel 27</span>\r
        <span>Panel 28</span>\r
        <span>Panel 29</span>\r
        <span>Panel 30</span>\r
        <span>Panel 31</span>\r
        <span>Panel 32</span>\r
        <span>Panel 33</span>\r
        <span>Panel 34</span>\r
        <span>Panel 35</span>\r
        <span>Panel 36</span>\r
        <span>Panel 37</span>\r
        <span>Panel 38</span>\r
        <span>Panel 39</span>\r
        <span>Panel 40</span>\r
        <span>Panel 41</span>\r
        <span>Panel 42</span>\r
        <span>Panel 43</span>\r
        <span>Panel 44</span>\r
        <span>Panel 45</span>\r
        <span>Panel 46</span>\r
        <span>Panel 47</span>\r
        <span>Panel 48</span>\r
        <span>Panel 49</span>\r
        <span>Panel 50</span>\r
        <span>Panel 51</span>\r
        <span>Panel 52</span>\r
        <span>Panel 53</span>\r
        <span>Panel 54</span>\r
        <span>Panel 55</span>\r
        <span>Panel 56</span>\r
        <span>Panel 57</span>\r
        <span>Panel 58</span>\r
        <span>Panel 59</span>\r
        <span>Panel 60</span>\r
        <span>Panel 61</span>\r
        <span>Panel 62</span>\r
        <span>Panel 63</span>\r
        <span>Panel 64</span>\r
        <span>Panel 65</span>\r
        <span>Panel 66</span>\r
        <span>Panel 67</span>\r
        <span>Panel 68</span>\r
        <span>Panel 69</span>\r
        <span>Panel 70</span>\r
        <span>Panel 71</span>\r
        <span>Panel 72</span>\r
        <span>Panel 73</span>\r
        <span>Panel 74</span>\r
        <span>Panel 75</span>\r
        <span>Panel 76</span>\r
        <span>Panel 77</span>\r
        <span>Panel 78</span>\r
        <span>Panel 79</span>\r
        <span>Panel 80</span>\r
        <span>Panel 81</span>\r
        <span>Panel 82</span>\r
        <span>Panel 83</span>\r
        <span>Panel 84</span>\r
        <span>Panel 85</span>\r
        <span>Panel 86</span>\r
        <span>Panel 87</span>\r
        <span>Panel 88</span>\r
        <span>Panel 89</span>\r
        <span>Panel 90</span>\r
        <span>Panel 91</span>\r
        <span>Panel 92</span>\r
        <span>Panel 93</span>\r
        <span>Panel 94</span>\r
        <span>Panel 95</span>\r
        <span>Panel 96</span>\r
        <span>Panel 97</span>\r
        <span>Panel 98</span>\r
        <span>Panel 99</span>\r
    </div>\r
</div>`,z=[["/classes/_innorules_ir-style.index.IRSplitContainer.html","IRSplitContainer"],["/types/_innorules_ir-style.index.IRSplitContainerOptions.html","IRSplitContainerOptions"]];function k(){return n.jsxs(a,{children:[n.jsx(p,{children:"Size 설정"}),n.jsxs("p",{children:[n.jsx("code",{children:"sizes"}),"를 이용하여 해당 패널의 백분율 배열로 지정할 수 있고,",n.jsx("br",{}),n.jsx("code",{children:"minSize(default: 100px), maxSize"}),"의 px를 지정하여 resize 가능한 크기 범위를 지정합니다.",n.jsx("br",{}),n.jsx("code",{children:"Infinity"}),"는 ",n.jsx("code",{children:"minSize"}),"에서 사용 시 설정된 패널 초기 크기로 지정되고, ",n.jsx("code",{children:"maxSize"}),"에서 사용 시 무한으로 늘어날 수 있습니다."]}),n.jsx(s,{docList:z}),n.jsx(e,{css:"#live_editor_wrapper { padding: 0 }",htmlRaw:b,code:f})]})}k.__docgenInfo={description:"",methods:[],displayName:"Size"};const A=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
new IRSplitContainer( {\r
    elements: ["#split-0", "#split-1", "#split-2"],\r
    options: { gutterCls: "thin" },\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-3", "#split-4"],\r
    options: {\r
        direction: "vertical",\r
        gutterCls: "thin",\r
    },\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-5", "#split-6"],\r
    options: { gutterCls: "thin" },\r
} );`,$=`<div class="border" style="height: 400px; overflow: auto">\r
    <div id="split-0">panel 1</div>\r
    <div id="split-1">panel 2</div>\r
    <div id="split-2">\r
        <div id="split-3">panel 3</div>\r
        <div id="split-4">\r
            <div id="split-5">\r
                <p>Panel 0</p>\r
                <p>Panel 1</p>\r
                <p>Panel 2</p>\r
                <p>Panel 3</p>\r
                <p>Panel 4</p>\r
                <p>Panel 5</p>\r
                <p>Panel 6</p>\r
                <p>Panel 7</p>\r
                <p>Panel 8</p>\r
                <p>Panel 9</p>\r
                <p>Panel 10</p>\r
                <p>Panel 11</p>\r
                <p>Panel 12</p>\r
                <p>Panel 13</p>\r
                <p>Panel 14</p>\r
                <p>Panel 15</p>\r
                <p>Panel 16</p>\r
                <p>Panel 17</p>\r
                <p>Panel 18</p>\r
                <p>Panel 19</p>\r
            </div>\r
            <div id="split-6">\r
                <span>Panel 0</span>\r
                <span>Panel 1</span>\r
                <span>Panel 2</span>\r
                <span>Panel 3</span>\r
                <span>Panel 4</span>\r
                <span>Panel 5</span>\r
                <span>Panel 6</span>\r
                <span>Panel 7</span>\r
                <span>Panel 8</span>\r
                <span>Panel 9</span>\r
                <span>Panel 10</span>\r
                <span>Panel 11</span>\r
                <span>Panel 12</span>\r
                <span>Panel 13</span>\r
                <span>Panel 14</span>\r
                <span>Panel 15</span>\r
                <span>Panel 16</span>\r
                <span>Panel 17</span>\r
                <span>Panel 18</span>\r
                <span>Panel 19</span>\r
                <span>Panel 20</span>\r
                <span>Panel 21</span>\r
                <span>Panel 22</span>\r
                <span>Panel 23</span>\r
                <span>Panel 24</span>\r
                <span>Panel 25</span>\r
                <span>Panel 26</span>\r
                <span>Panel 27</span>\r
                <span>Panel 28</span>\r
                <span>Panel 29</span>\r
                <span>Panel 30</span>\r
                <span>Panel 31</span>\r
                <span>Panel 32</span>\r
                <span>Panel 33</span>\r
                <span>Panel 34</span>\r
                <span>Panel 35</span>\r
                <span>Panel 36</span>\r
                <span>Panel 37</span>\r
                <span>Panel 38</span>\r
                <span>Panel 39</span>\r
                <span>Panel 40</span>\r
                <span>Panel 41</span>\r
                <span>Panel 42</span>\r
                <span>Panel 43</span>\r
                <span>Panel 44</span>\r
                <span>Panel 45</span>\r
                <span>Panel 46</span>\r
                <span>Panel 47</span>\r
                <span>Panel 48</span>\r
                <span>Panel 49</span>\r
                <span>Panel 50</span>\r
                <span>Panel 51</span>\r
                <span>Panel 52</span>\r
                <span>Panel 53</span>\r
                <span>Panel 54</span>\r
                <span>Panel 55</span>\r
                <span>Panel 56</span>\r
                <span>Panel 57</span>\r
                <span>Panel 58</span>\r
                <span>Panel 59</span>\r
                <span>Panel 60</span>\r
                <span>Panel 61</span>\r
                <span>Panel 62</span>\r
                <span>Panel 63</span>\r
                <span>Panel 64</span>\r
                <span>Panel 65</span>\r
                <span>Panel 66</span>\r
                <span>Panel 67</span>\r
                <span>Panel 68</span>\r
                <span>Panel 69</span>\r
                <span>Panel 70</span>\r
                <span>Panel 71</span>\r
                <span>Panel 72</span>\r
                <span>Panel 73</span>\r
                <span>Panel 74</span>\r
                <span>Panel 75</span>\r
                <span>Panel 76</span>\r
                <span>Panel 77</span>\r
                <span>Panel 78</span>\r
                <span>Panel 79</span>\r
                <span>Panel 80</span>\r
                <span>Panel 81</span>\r
                <span>Panel 82</span>\r
                <span>Panel 83</span>\r
                <span>Panel 84</span>\r
                <span>Panel 85</span>\r
                <span>Panel 86</span>\r
                <span>Panel 87</span>\r
                <span>Panel 88</span>\r
                <span>Panel 89</span>\r
                <span>Panel 90</span>\r
                <span>Panel 91</span>\r
                <span>Panel 92</span>\r
                <span>Panel 93</span>\r
                <span>Panel 94</span>\r
                <span>Panel 95</span>\r
                <span>Panel 96</span>\r
                <span>Panel 97</span>\r
                <span>Panel 98</span>\r
                <span>Panel 99</span>\r
            </div>\r
        </div>\r
    </div>\r
</div>`,D=[["/classes/_innorules_ir-style.index.IRSplitContainer.html","IRSplitContainer"],["/types/_innorules_ir-style.index.IRSplitContainerOptions.html","IRSplitContainerOptions"]];function L(){return n.jsxs(a,{children:[n.jsx(p,{children:"IRSplitContainer"}),n.jsxs("p",{children:[n.jsx("code",{children:"gutterCls: `thin`"})," 옵션을 사용하면 thin 스타일을 적용하여 얇은 영역 나누기가 가능합니다."]}),n.jsx(s,{docList:D}),n.jsx(e,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:480,htmlRaw:$,code:A})]})}L.__docgenInfo={description:"",methods:[],displayName:"ThinStyle"};const T={title:"JS Components/IRSplitContainer"},H=["API","Basic","DeepNestedCase","Event","GutterClickAction","Size","ThinStyle"];export{t as API,v as Basic,u as DeepNestedCase,S as Event,_ as GutterClickAction,k as Size,L as ThinStyle,H as __namedExportsOrder,T as default};
