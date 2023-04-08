import React,{ Component, Fragment } from "react";


import { BasicTabs } from "./Components/BasicTab";
import BasicCard from "./Components/BasicCard";
import BasicModal from "./Components/BasicModal";
import CompanyCard from "./Components/CompanyCard";

interface IAboutUs{
    simplePhrase: string;
    openEditBasicPhrase: boolean;
    dummyText:string;
    popUptoOpen:string;
    dummyText1: string;
}
export class AboutUs extends Component<{},IAboutUs>{
    constructor(props:any){
        super(props);
        this.state = {
            simplePhrase: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            openEditBasicPhrase: false,
            dummyText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            dummyText1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            popUptoOpen:""
        }
    }
    editSimpleOne = (e:any) => {
        if(this.state.popUptoOpen === "privacy"){
             this.setState({
                dummyText: e.target.value
             })
        }
        if(this.state.popUptoOpen === "basic"){
            this.setState({
                simplePhrase: e.target.value
            })
        }
        if(this.state.popUptoOpen === "terms"){
            this.setState({
                dummyText1: e.target.value
            })
        }
    }
    openBasicModal = (e:any) => {
        console.log('Pure EEEe', e.currentTarget.name);
        this.setState({
            popUptoOpen: e.currentTarget.name,
            openEditBasicPhrase: !this.state.openEditBasicPhrase,
        })
    }
    render() {
    return(
        <Fragment> 
                <h1>About US</h1>
                {
                    this.state.openEditBasicPhrase ? 
                       this.state.popUptoOpen === "privacy" ?
                       <BasicModal
                        simplePhrase = {this.state.dummyText}
                        openEditBasicPhrase = {this.state.openEditBasicPhrase}
                        editSimpleOne = {(e:any) => this.editSimpleOne(e)}
                        openBasicModal = {this.openBasicModal}
                        />: 
                        this.state.popUptoOpen === "terms" ?
                       <BasicModal
                        simplePhrase = {this.state.dummyText1}
                        openEditBasicPhrase = {this.state.openEditBasicPhrase}
                        editSimpleOne = {(e:any) => this.editSimpleOne(e)}
                        openBasicModal = {this.openBasicModal}
                        />:
                       this.state.popUptoOpen === "basic" ?
                        <BasicModal
                        simplePhrase = {this.state.simplePhrase}
                        openEditBasicPhrase = {this.state.openEditBasicPhrase}
                        editSimpleOne = {(e:any) => this.editSimpleOne(e)}
                        openBasicModal = {this.openBasicModal}
                    />:null:null
                }
                <CompanyCard/>
                <BasicCard
                  simplePhrase={this.state.simplePhrase}
                  openBasicModal = {this.openBasicModal}
                />
                <BasicTabs
                dummyText={this.state.dummyText}
                dummyText1={this.state.dummyText1}
                openBasicModal= {this.openBasicModal}
                />
        </Fragment>
    )
   }
}