// Write component name Quiz4 and display your name

const Quiz4 = () => {
  const book = {
    title: "Arisa A.",
    price: 10,
  };

  return <Child3 book={book} />;
  //   return <Child2 text="Arisa A." price={10} />;
  //   return <Child text="Arisa A." price={10} />;
};

function Child(props) {
  return (
    <div>
      {props.text} ${props.price} included VAT ${props.price + 1}
    </div>
  );
}

function Child2({ text, price }) {
  return (
    <div>
      {text} ${price} included VAT ${price + 1}
    </div>
  );
}

function Child3({ book }) {
  return (
    <div>
      {book.title} ${book.price} included VAT ${book.price + 1}
    </div>
  );
}

export default Quiz4;
