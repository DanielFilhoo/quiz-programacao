import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Category from '../img/category.svg';
import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuesstions = (category) => {
    dispatch({type: "START_GAME", payload: category });

    dispatch({ Type: "REORDER_QUESTIONS"});
  }

  return (
    <div id="category">
        <h2>Escolha uma categoria</h2>
        <p>As pergunrtas serão referente a uma das linguagens abaixo: </p>
        <div>
        {quizState.questions.map((question) => (
          <button onClick={() => chooseCategoryAndReorderQuesstions(question.category)} key={question.category}>{question.category}</button>
        ))}
        </div>
        <img src={Category} alt="Categorias do quiz" />
     
    </div>
  )
}

export default PickCategory
