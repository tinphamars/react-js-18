import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="chat-container">
        <h1 className="chat-title">How to install</h1>
        <div className="line-chat-user left">
          <img
            className="user-icon"
            src="https://png.pngitem.com/pimgs/s/130-1300380_female-user-image-icon-hd-png-download.png"
          />
          <ul className="chat-line-item">
            <li>Hi, What yuor name</li>
            <li>How much do it</li>
            <li>133 tan can, Binh thanh Hcm</li>
          </ul>
        </div>

        <div className="line-chat-user right">
          <img
            className="user-icon"
            src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
          />
          <ul className="chat-line-item">
            <li className="me">Hi, What your name</li>
            <li className="me">How much do it</li>
            <li className="me">133 tan can, Binh thanh Hcm</li>
          </ul>
        </div>

        <div className="input-chat">
          <input type="text" />
        </div>
      </div>
    </div>
  );
}