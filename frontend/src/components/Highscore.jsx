const  Highscore = (props) => {
    return (  
        /* From Uiverse.io by shadowmurphy */ 
<section class="card">
  <header>
    <p>{props.username} </p>
    <a href="#">Performed:</a>
  </header>
  <main>
    <p>{props.wpm} <a href="#">wpm</a></p>
  </main>
  <footer>
    <a href="#">Congratulations</a><p>for being in the Leaderboard</p>
  </footer>        
</section>

    );
}
 
export default Highscore;