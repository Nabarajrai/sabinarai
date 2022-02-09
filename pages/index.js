import styles from "../styles/Home.module.css";
import image from "../public/1.jpg";

export default function Home() {
  const options = {
    mode: "no-cors",
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ grant_type: "authorization_code" }),
  };

  fetch("https://auth.truelayer-sandbox.com/connect/token", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return (
    <div
      className={styles.container}
      style={{ width: " 1133px", margin: "auto" }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          boxShadow: "0px 5px 15px black",
        }}
      >
        <div>
          <h2>Hoi Hoi 😆 😎</h2>
        </div>
        <h1>Hello Sabina I love you very 👧 🙋much!</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "50px",
          }}
        >
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/271858365_454656879636613_7953749990297950221_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=pGVplBvSP1UAX9P01rt&_nc_ht=scontent.fktm8-1.fna&oh=00_AT92xav8sLcjTPuZZWQwx_aw9kWAD7Ln39RPCsCc4FUaPQ&oe=62087BDE"
            alt="Sabina image"
          />
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://lh3.googleusercontent.com/zxXu3kUZS0N0VoFq-gK8dAir4vrrljNsTNkSW0yflgyVhfaRyKUNHlK7nDFXbYzT1pw80NVDkqjeABfugtK8y-mNFt0GF4QSt_g3FhgoMINpcqYfw74iyPbj_LXZ7CdzXBX2ntdF8xBgjQNBGUSJyby75uL8PrWMstIqmoA_tUUxZiN4uNIRS-nbGimfCeM8cgvvUN61wFc4-8Ud7qTq2ELy4m4z2OpuFZ91WauzbUsoYzUTYesHK_DhiBSzMggJ4nw9cnrp2HfdB_hhGMASzpN1l3GziKAAfBoDNFf3NlUHo4u4jHTJfGZ3GBIkEwzlWE8slu1mdSS0hdPxRdVNwfg62jFe20OwMxhTXOtI1P3uM04B1HmfOvElAOwJC3O3waTVK8CyuVRSXbD3RFvtezX7HqI1SERI4qfByHgt7ZLNB8wBsfdqwratN4s19sRIzcLDQuF3dO5NJ4699EoQiz9k5qZkXUHerZxeCAGNy8rY7fDioOhrQ3ifo2JhZPJc1acPO0148QYsOukCS3OZnCWKgaDUGrSO4WrJoMVzcrOY6m-JJ6mAt9PvJdIR6P1HrgFW8arTn7cM-w7_jR5m93wQI48sou1PmADXValYhE0W4UpZ4PkFi7hbrKEfWRJTFvuGsbfrQcqqdE-set396dD9Ky9KlWp3keMpTPfLvOPPsIcUu6Qr2_tAc9gayqSaMv0fKfsl6QYi-Y9U56KQSdva=w1515-h854-no?authuser=0"
            alt=""
          />
        </div>
        <div style={{ padding: "50px", marginBottom: "50px" }}>
          <h2>Thank you Sabina for watching ! </h2>
        </div>
      </div>
    </div>
  );
}
