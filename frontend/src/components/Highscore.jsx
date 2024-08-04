const  Highscore = (props) => {
    return (  
        /* From Uiverse.io by shadowmurphy */ 
<section class="card">
  <header>
    <p>{props.username}</p>
    <a href="#">Details</a>
  </header>
  <main>
    <p>42 <a href="#">ms</a></p>
  </main>
  <footer>
    <a href="#">Beats 92.42%</a><p>of users on Echoverse</p>
  </footer>        
</section>

    );
}
 
export default Highscore;