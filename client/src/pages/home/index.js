import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  .container {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(63, 73, 204);
  }
  .formContainer {
    width: 400px;
    margin: 0 auto 0 auto;
    padding: 32px;
    background: lightblue;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }
  .input {
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid rgb(63, 73, 204);
    font-size: 0.9rem;
    box-sizing: content-box;
  }
  .input option {
    margin-top: 40px;
  }
`;

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();
  const joinRoom = () => {
    if (room !== "" && username != "") {
      socket.emit("join_room", { username, room });
    }

    navigate("/chat", { replace: true });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="formContainer">
          <h1>{`<>DevRooms</>`}</h1>
          <input
            className="input"
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value)}
          />

          <select className="input" onChange={(e) => setRoom(e.target.value)}>
            <option>-- Select Room --</option>
            <option value="javascript">JavaScript</option>
            <option value="node">Node</option>
            <option value="express">Express</option>
            <option value="react">React</option>
          </select>

          <button
            className="btn btn-secondary"
            style={{ width: "100%" }}
            onClick={joinRoom}
          >
            Join Room
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
