import { useState } from "react";

function App() {
  const [showRooms, setShowRooms] = useState(false);
  const [showRooomMaker, setShowRoomMaker] = useState(false);
  const [gameRoom, setGameRoom] = useState({});

  const handleScreens = (action) => {
    switch (action) {
      case 1:
        setShowRoomMaker(false);
        setShowRooms(true);
        break;
    
      case 2:
        setShowRooms(false);
        setShowRoomMaker(true);
        break;
      
      default:
        break;
    }
  }

  const joinRoom = () => {
    return (
      <div className="border">
        <h1>Game 1</h1>
        <button>Join</button>
      </div>
    );
  }

  const makeRoom = () => {
    return(
      <div className="border">
        <input type="text" placeholder="Game Room Name"/>
        <h3>Make this a private game?</h3>
        <button>Yes</button>
        <button>No</button>

        <label>Please enter a password</label>
        <input type="text" />

        <label htmlFor="">Max number of players</label>
        <button>2</button>
        <button>3</button>
        <button>4</button>

        <label htmlFor="">Enter a username</label>
        <input type="text" />

        <button>Make Room</button>


      </div>
    )
  }

  return (
    <>
    <div className="vw-100 vh-100 border d-flex flex-column">
      <div className="h-100">
        <h1>Home</h1>
        <button>Rules</button>
        <button onClick={() => handleScreens(1)}>Join Game</button>
        <button onClick={() => handleScreens(2)}>Create Game</button>
      </div>
      <div className="h-100">
        {showRooms && joinRoom()}
        {showRooomMaker && makeRoom()}
      </div>
    </div>
    </>
  );
}

export default App
