// rafce -> react arrow function component export (ES7+ Extension Shortcut)
// rafc -> react arrow function component (ES7+ Extension Shortcut)

// <></> is a fragment (Doesn't show up in DOM)
// Cannot use if-else in {} in return(), as it has to be a one-line expression only. But can use a ternary expression

const Test = () => {
    const name = "Amy";
    const x = 3;
    const y = 5;
    const names = ['Brad', 'Mary', 'Sara', 'Nick'];
    const loggedIn = true;
    const styles = {
      color: 'blue',
      fontSize: '18px',
    };
  
    return (
      <>
        <div className="text-5xl">App</div>
        <p style={ { color: 'red', fontSize: '24px' } }>Hello {name}!</p>
        <p style={styles}>The sum of {x} and {y} is {x + y}.</p>
        <ul>
          { names.map((n, index) => <li key={index}>{n}</li>) }
        </ul>
        { loggedIn && <h1>Hello Member</h1> }
      </>
    );
};

export default Test;
  