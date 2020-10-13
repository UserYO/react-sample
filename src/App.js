import React from 'react'
// css
import './App.css';

// 自作モジュールをインポート
import FishData from './Data/FishData'

// 画像を利用する場合のimport例
import ChouchinankouImage from './images/shinkai_chouchinankou.png'
import OctopusImage from './images/shinkai_mendako_open.png'
import RyugunotsukaiImage from './images/shinkai_ryugunotsukai.png'


// タイトル
class Title extends React.Component {
  // この関数の戻り値が描画されるHTMLとなる
  render() {
    // これがJSXの記法
    return <div><p>React水族館!</p></div>
  }
}


/************************************************
* FishDataクラスを別名のコンポーネントとして再定義する
* クラスだけでなく関数もReactのコンポーネントとして扱える
* 関数の場合はrenderメソッドの場合の戻り値をそのまま返すように実装する
*************************************************/

// 関数Ver
function Chouchinankou(props) {
  return <FishData
    // 下は<div class="fish-data"/>と同じ意味
    // cssの指定とかで使う
    // JavaScriptではclassが予約語なので使えない
    className="fishdata"
    fishName="チョウチンアンコウ"
    imgSrc={ChouchinankouImage}
    imgAlt="チョウチンアンコウの画像"
    defaultGood={props.defaultGood}
  />
}

// ラムダ式でもOK
const Octopus = props =>
  <FishData
    className="fishdata"
    fishName="メンダコ"
    imgSrc={OctopusImage}
    imgAlt="メンダコの画像"
    defaultGood={props.defaultGood}
  />

// サンプルをいくつか見た感じ、functionで関数を定義するよりラムダ式の方が主流っぽい
const Ryugunotsukai = props =>
  <FishData
    className="fishdata"
    fishName="リュウグウノツカイ"
    imgSrc={RyugunotsukaiImage}
    imgAlt="リュウグウノツカイの画像"
    defaultGood={props.defaultGood}
  />


class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <hr />
        <div className="fishdataarea">
          <Chouchinankou defaultGood={3} />
          <Octopus defaultGood={10} />
          <Ryugunotsukai  defaultGood={5}/>
        </div>
      </div>
    )
  }
}


export default App;
