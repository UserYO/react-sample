import React from 'react'

// 以下Reactの基本ルール
// タグで指定したattributeは変数propsに渡される
// 状態はstate変数で持ち、setStateメソッドで更新
// JSXのアトリビュートで宣言した値はコンストラクタの第一引数で受け取る
// (this.props.xxx)で受け取ることができる
class FishData extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            good:props.defaultGood
            ,bad:0
        }
        
        this.voteGood = () => {
            this.setState({ good: this.state.good + 1 })
        }
        
        this.voteBad = () => {
            this.setState({ bad: this.state.bad + 1 })
        }
    }

    render() {
        return (
            <div className={this.props.className} >
                <p>{this.props.fishName}</p>
                <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                <div>Good:{this.state.good}</div>
                <div>Bad:{this.state.bad}</div>
                <button onClick={this.voteGood}> Good!</button>
                <button onClick={this.voteBad}> Bad...</button>
            </div>
        )
    }
}

export default FishData