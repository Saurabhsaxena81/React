function Hello1() {
    let myName ="Saurabh"
     let messageNo = "456"
    let fullName = () =>{
        return "Saurabh Saxena"
    }
    return <p>
        MessageNo: {messageNo} I am your friend {fullName()}
    </p>
}
export default Hello1