function Maincontent(){
    return (<h1>We did it!!</h1>);
}
function Decl(){
    return (<h1 className="header">This is the declarative way</h1>);
}

const items = (
    <div>
        <Maincontent />
        <Decl />
    </div>
)
ReactDOM.render(
    items,
    document.getElementById("root")
)

const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way";
h1.className = "header";
document.getElementById("root").append(h1);