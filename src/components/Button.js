import React from 'react'

export class Button extends React.Component{
    state = {
        nama: "Hendri"
    }

    ubahNama = ()=>{
        this.setState({nama: "Fazztrack"})
    }
    componentDidUpdate(){
        console.log("Komponen berhasil diupdate!");
    }
    componentDidMount(){
        console.log("Komponen berhasil ditampilkan")
    }

    componentWillUnmount(){
        console.log("Komponen dihilangkan")
    }

    render(){
        return (
            <div>
                {this.props.sapa}
                <div>{this.state.nama}</div>
                <button onClick={this.ubahNama}>Ubah</button>
            </div>
        )
    }
}

export default Button