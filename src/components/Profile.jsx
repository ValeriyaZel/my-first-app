import React from "react";
export class Profile extends React.Component{
    constructor() {
        super();
        this.state = {
            userName: "empty"
        }
    }
    componentDidMount() {
        fetch (  "http://antonorj.beget.tech/getUserJSON")
            .then(response=>response.text())
            .then(info=>{
                this.setState({
                    userName:info
                })
            });
    }
    render() {
        console.log("шаг 1 Компонента отрисовывается");
        return <div className="row">
        <div className="col-2">
            <img width="100%" src="https://yt3.ggpht.com/a/AATXAJyaYogw6uN_H6J6JvCOgr0Sq9SBvIwD3A9E7Q=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
        </div>
        <div className="col-10">
            <h1>{this.state.userName}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dignissimos tempore? Animi deleniti doloremque eos exercitationem facere ipsum, laboriosam laborum officiis quia quidem quisquam quod saepe temporibus ullam vero. Temporibus.</p>
        </div>
    </div>
    }
}