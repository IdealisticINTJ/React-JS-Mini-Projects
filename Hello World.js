function Welcome(props) {
  return <h1>All Hail... {props.name}</h1>;
}

const element = <Welcome name="Salma the Great!  \(*-*)/ " />;
ReactDOM.render(element, document.getElementById('root'));
