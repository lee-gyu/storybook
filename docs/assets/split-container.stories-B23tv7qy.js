import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{D as a,a as p,L as s,V as e}from"./version-tag-BrgfOmML.js";import"./iframe-CPzXEQh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-kA2kW7wp.js";const l=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
const split = new IRSplitContainer( { elements: ["#split-0", "#split-1"] } );\r
\r
btn1.onclick = () => alert( split.getSizes() );\r
btn2.onclick = () => split.collapse( 0 );\r
btn3.onclick = () => split.destroy( false );\r
\r
split.setSizes( [25, 75] );`,r=`<div class="ir-flex ir-gap-x-xxs ir-p-xs" style="border-bottom: 1px solid var(--border-color);">\r
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
</div>`;function P(){return n.jsxs(a,{children:[n.jsx(p,{children:"API"}),n.jsxs("p",{children:[n.jsx("code",{children:"setSizes([25, 75])"})," 백분율 배열로, 분할 요소의 크기를 업데이트할 수 있습니다.",n.jsx("br",{}),n.jsx("code",{children:"getSizes"})," resize된 백분율 배열을 반환합니다.",n.jsx("br",{}),n.jsx("code",{children:"collapse(index)"})," 설정된 minSize의 크기로 요소의 크기를 변경합니다. (모든 요소는 앞쪽, 위쪽으로 축소됨)",n.jsx("br",{}),n.jsx("code",{children:"destroy(preserveStyles? = false, preserveGutters? = false)"})," split을 제거합니다. (preserveStyle: CSS 제거 여부, preserveGutters: gutter 제거 여부)"]}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:r,code:l})]})}P.__docgenInfo={description:"",methods:[],displayName:"API"};const i=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
new IRSplitContainer( {\r
    elements: ["#split-0", "#split-1", "#split-2"],\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-3", "#split-4"],\r
    options: {\r
        direction: "vertical",\r
        borderColor: "border-light",\r
        gutterCls: "thin",\r
    },\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-5", "#split-6"],\r
    options: { borderColor: "border-light" },\r
} );`,t=`<div style="height: 100%;">\r
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
</div>`;function d(){return n.jsxs(a,{children:[n.jsx(p,{children:"IRSplitContainer"}),n.jsx(e,{children:"ir-style@^2.16.0"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRSplitContainer"}),"을 활용하여 구역 경계를 나누고, 사이즈를 변경할 수 있게 합니다."]}),n.jsxs("p",{children:["※ 구버전은 ",n.jsx("code",{children:"createSplitContainer"})," 함수 사용"]}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:t,code:i})]})}d.__docgenInfo={description:"",methods:[],displayName:"Basic"};const o=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
new IRSplitContainer( {\r
    elements: ["#split-0", "#split-1"],\r
    options: {\r
        gutterClickAction: "toggleVisible",\r
        minSize: 0,\r
    },\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-2", "#split-3"],\r
    options: {\r
        gutterClickAction: "toggleVisible",\r
        minSize: 0,\r
    },\r
} );\r
\r
new IRSplitContainer( {\r
    elements: ["#split-4", "#split-5"],\r
    options: {\r
        gutterClickAction: "toggleVisible",\r
        minSize: 0,\r
    },\r
} );`,c=`<div class="border" style="height: 320px;">
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
</div>`;function v(){return n.jsxs(a,{children:[n.jsx(p,{children:"Deep Nested Case"}),n.jsx(e,{children:"ir-style@^2.14.0"}),n.jsx("p",{children:"중첩된 splitter 테스트"}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:c,code:o})]})}v.__docgenInfo={description:"",methods:[],displayName:"DeepNestedCase"};const h=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
new IRSplitContainer( {\r
    elements: ["#split-0", "#split-1"],\r
    options: {\r
        onDrag: ( sizes ) => console.log( sizes ),\r
        onDragStart: ( sizes ) => console.log( "start : ", sizes ),\r
        onDragEnd: ( sizes ) => console.log( "end : ", sizes ),\r
    },\r
} );`,m=`<div style="height: 100%;">\r
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
</div>`;function x(){return n.jsxs(a,{children:[n.jsx(p,{children:"Event"}),n.jsxs("p",{children:[n.jsx("code",{children:"onDrag"})," 이벤트를 이용하여 드래그 시 이벤트를 받을 수 있습니다.",n.jsx("br",{}),n.jsx("code",{children:"onDragStart"})," 이벤트를 이용하여 드래그 시작 시 이벤트를 받을 수 있습니다.",n.jsx("br",{}),n.jsx("code",{children:"onDragEnd"})," 이벤트를 이용하여 드래그 종료 시 이벤트를 받을 수 있습니다."]}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:m,code:h})]})}x.__docgenInfo={description:"",methods:[],displayName:"Event"};const g=`\r
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
            columns: [ "0", "4", "5" ],\r
        } );\r
    }\r
\r
    return tree;\r
}\r
\r
createIRGrid();\r
createIRTreeView();\r
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
} );`,u=`<div>
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
</div>`;function R(){return n.jsxs(a,{children:[n.jsx(p,{children:"GutterClickAction"}),n.jsx(e,{children:"ir-style@^2.14.0"}),n.jsx("p",{children:"gutterClickAction: `toggleVisible` 옵션을 사용하면 첫번째 Gutter를 클릭할 때마다 좌측 패널이 자동으로 접히거나 펼쳐진다."}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:500,htmlRaw:u,code:g})]})}R.__docgenInfo={description:"",methods:[],displayName:"GutterClickAction"};const C=`import { IRSplitContainer } from "@innorules/ir-style";\r
\r
new IRSplitContainer( {\r
    elements: ["#split-0", "#split-1"],\r
    options: {\r
        sizes: [20, 80],\r
        minSize: 150,\r
        maxSize: [700, Infinity],\r
    },\r
} );`,S=`<div class="border" style="height: 240px;">
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
</div>`;function w(){return n.jsxs(a,{children:[n.jsx(p,{children:"Size 설정"}),n.jsxs("p",{children:[n.jsx("code",{children:"sizes"}),"를 이용하여 해당 패널의 백분율 배열로 지정할 수 있고,",n.jsx("br",{}),n.jsx("code",{children:"minSize(default: 100px), maxSize"}),"의 px를 지정하여 resize 가능한 크기 범위를 지정합니다.",n.jsx("br",{}),n.jsx("code",{children:"Infinity"}),"는 ",n.jsx("code",{children:"minSize"}),"에서 사용 시 설정된 패널 초기 크기로 지정되고, ",n.jsx("code",{children:"maxSize"}),"에서 사용 시 무한으로 늘어날 수 있습니다."]}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",htmlRaw:S,code:C})]})}w.__docgenInfo={description:"",methods:[],displayName:"Size"};const I=`import { IRSplitContainer } from "@innorules/ir-style";\r
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
} );`,j=`<div class="border" style="height: 400px; overflow: auto">
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
</div>`;function f(){return n.jsxs(a,{children:[n.jsx(p,{children:"IRSplitContainer"}),n.jsx("p",{children:"thin 스타일을 적용하여 얇은 영역 나누기가 가능합니다."}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:480,htmlRaw:j,code:I})]})}f.__docgenInfo={description:"",methods:[],displayName:"ThinStyle"};const A={title:"JS Components/IRSplitContainer"},D=["API","Basic","DeepNestedCase","Event","GutterClickAction","Size","ThinStyle"];export{P as API,d as Basic,v as DeepNestedCase,x as Event,R as GutterClickAction,w as Size,f as ThinStyle,D as __namedExportsOrder,A as default};
