import classes from "./hero.module.css";
import Image from "next/image";
import profilePicture from "../../public/images/site/my.png";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={profilePicture}
          alt={profilePicture}
          placeholder="blur"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Mustafa</h1>
      <p>I am a front-end web developer from Turkey.</p>
      <p>Welcome to my blog.</p>
    </section>
  );
}

export default Hero;
