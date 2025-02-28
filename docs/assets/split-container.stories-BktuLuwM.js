import{j as n}from"./jsx-runtime-Y5Ju2SGo.js";import{D as a,a as p,L as s,V as e}from"./version-tag-DunVkkeT.js";import"./index-eCxJ45ll.js";const l=`import { IRSplitContainer } from "@innorules/ir-style";

const split = new IRSplitContainer( { elements: ["#split-0", "#split-1"] } );

btn1.onclick = () => alert( split.getSizes() );
btn2.onclick = () => split.collapse( 0 );
btn3.onclick = () => split.destroy( false );

split.setSizes( [25, 75] );`,P=`<div class="ir-flex ir-gap-x-xxs ir-p-xs" style="border-bottom: 1px solid var(--border-color);">
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
</div>`;function i(){return n.jsxs(a,{children:[n.jsx(p,{children:"API"}),n.jsxs("p",{children:[n.jsx("code",{children:"setSizes([25, 75])"})," 백분율 배열로, 분할 요소의 크기를 업데이트할 수 있습니다.",n.jsx("br",{}),n.jsx("code",{children:"getSizes"})," resize된 백분율 배열을 반환합니다.",n.jsx("br",{}),n.jsx("code",{children:"collapse(index)"})," 설정된 minSize의 크기로 요소의 크기를 변경합니다. (모든 요소는 앞쪽, 위쪽으로 축소됨)",n.jsx("br",{}),n.jsx("code",{children:"destroy(preserveStyles? = false, preserveGutters? = false)"})," split을 제거합니다. (preserveStyle: CSS 제거 여부, preserveGutters: gutter 제거 여부)"]}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:P,code:l})]})}i.__docgenInfo={description:"",methods:[],displayName:"API"};const t=`import { IRSplitContainer } from "@innorules/ir-style";

new IRSplitContainer( {
    elements: ["#split-0", "#split-1", "#split-2"],
} );

new IRSplitContainer( {
    elements: ["#split-3", "#split-4"],
    options: {
        direction: "vertical",
        borderColor: "border-light",
        gutterCls: "thin",
    },
} );

new IRSplitContainer( {
    elements: ["#split-5", "#split-6"],
    options: { borderColor: "border-light" },
} );`,d=`<div style="height: 100%;">
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
</div>`;function o(){return n.jsxs(a,{children:[n.jsx(p,{children:"IRSplitContainer"}),n.jsx(e,{children:"ir-style@^2.16.0"}),n.jsxs("p",{children:[n.jsx("code",{children:"IRSplitContainer"}),"을 활용하여 구역 경계를 나누고, 사이즈를 변경할 수 있게 합니다."]}),n.jsxs("p",{children:["※ 구버전은 ",n.jsx("code",{children:"createSplitContainer"})," 함수 사용"]}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:d,code:t})]})}o.__docgenInfo={description:"",methods:[],displayName:"Basic"};const r=`import { IRSplitContainer } from "@innorules/ir-style";

new IRSplitContainer( {
    elements: ["#split-0", "#split-1"],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    },
} );

new IRSplitContainer( {
    elements: ["#split-2", "#split-3"],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    },
} );

new IRSplitContainer( {
    elements: ["#split-4", "#split-5"],
    options: {
        gutterClickAction: "toggleVisible",
        minSize: 0,
    },
} );`,c=`<div class="border-b--px height--block">
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
</div>`;function v(){return n.jsxs(a,{children:[n.jsx(p,{children:"Deep Nested Case"}),n.jsx(e,{children:"ir-style@^2.14.0"}),n.jsx("p",{children:"중첩된 splitter 테스트"}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:c,code:r})]})}v.__docgenInfo={description:"",methods:[],displayName:"DeepNestedCase"};const h=`import { IRSplitContainer } from "@innorules/ir-style";

new IRSplitContainer( {
    elements: ["#split-0", "#split-1"],
    options: {
        onDrag: ( sizes ) => console.log( sizes ),
        onDragStart: ( sizes ) => console.log( "start : ", sizes ),
        onDragEnd: ( sizes ) => console.log( "end : ", sizes ),
    },
} );`,m=`<div style="height: 100%;">
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
</div>`;function x(){return n.jsxs(a,{children:[n.jsx(p,{children:"Event"}),n.jsxs("p",{children:[n.jsx("code",{children:"onDrag"})," 이벤트를 이용하여 드래그 시 이벤트를 받을 수 있습니다.",n.jsx("br",{}),n.jsx("code",{children:"onDragStart"})," 이벤트를 이용하여 드래그 시작 시 이벤트를 받을 수 있습니다.",n.jsx("br",{}),n.jsx("code",{children:"onDragEnd"})," 이벤트를 이용하여 드래그 종료 시 이벤트를 받을 수 있습니다."]}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:m,code:h})]})}x.__docgenInfo={description:"",methods:[],displayName:"Event"};const g=`
import { IRSplitContainer, IRTreeView } from "@innorules/ir-style";
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
            columns: [ "0", "4", "5" ],
        } );
    }

    return tree;
}

createIRGrid();
createIRTreeView();

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
} );`,u=`<div>
    <button id="btnToggle" class="button">toggle visible</button>
</div>
<div id="container" class="border-t--px border-b--px" style="height: 400px;">
    <div id="split-0">
        <div id="split-01"></div>
        <div id="split-02"></div>
    </div>
    <div id="split-1">
        <div id="tree-view"></div>
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
</div>`;function R(){return n.jsxs(a,{children:[n.jsx(p,{children:"GutterClickAction"}),n.jsx(e,{children:"ir-style@^2.14.0"}),n.jsx("p",{children:"gutterClickAction: `toggleVisible` 옵션을 사용하면 첫번째 Gutter를 클릭할 때마다 좌측 패널이 자동으로 접히거나 펼쳐진다."}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:500,htmlRaw:u,code:g})]})}R.__docgenInfo={description:"",methods:[],displayName:"GutterClickAction"};const C=`import { IRSplitContainer } from "@innorules/ir-style";

new IRSplitContainer( {
    elements: ["#split-0", "#split-1"],
    options: {
        sizes: [20, 80],
        minSize: 150,
        maxSize: [700, Infinity],
    },
} );`,S=`<div style="height: 100%;">
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
</div>`;function w(){return n.jsxs(a,{children:[n.jsx(p,{children:"Size 설정"}),n.jsxs("p",{children:[n.jsx("code",{children:"sizes"}),"를 이용하여 해당 패널의 백분율 배열로 지정할 수 있고,",n.jsx("br",{}),n.jsx("code",{children:"minSize(default: 100px), maxSize"}),"의 px를 지정하여 resize 가능한 크기 범위를 지정합니다.",n.jsx("br",{}),n.jsx("code",{children:"Infinity"}),"는 ",n.jsx("code",{children:"minSize"}),"에서 사용 시 설정된 패널 초기 크기로 지정되고, ",n.jsx("code",{children:"maxSize"}),"에서 사용 시 무한으로 늘어날 수 있습니다."]}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:S,code:C})]})}w.__docgenInfo={description:"",methods:[],displayName:"Size"};const I=`import { IRSplitContainer } from "@innorules/ir-style";

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
} );`,b=`<div style="height: 100%">
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
</div>`;function j(){return n.jsxs(a,{children:[n.jsx(p,{children:"IRSplitContainer"}),n.jsx("p",{children:"thin 스타일을 적용하여 얇은 영역 나누기가 가능합니다."}),n.jsx(s,{css:"#live_editor_wrapper { padding: 0 }",fixedHeight:400,htmlRaw:b,code:I})]})}j.__docgenInfo={description:"",methods:[],displayName:"ThinStyle"};const _={title:"JS Components/IRSplitContainer"},k=["API","Basic","DeepNestedCase","Event","GutterClickAction","Size","ThinStyle"];export{i as API,o as Basic,v as DeepNestedCase,x as Event,R as GutterClickAction,w as Size,j as ThinStyle,k as __namedExportsOrder,_ as default};
