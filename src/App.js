import "./App.css";
import AwesomeAnimals from "./components/AwesomeAnimals";
import LikeButton from "./components/LikeButton";
import LikeCounter from "./components/LikeCounter";
import ArticleList from "./components/Article/ArticleList";

function App() {
  return (
    <main>
      <LikeCounter />
      <LikeButton />
      <AwesomeAnimals />
      <ArticleList />
    </main>
  );
}
export default App;
