import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import StartQuiz from './Components/StartQuiz/StartQuiz';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },

        element: <Home />,

      },
      {
        path: '/blog',
        element: <Blog />
      },

      {
        path: "/quiz/:quizId",
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId} `)
        },
        element: <StartQuiz />
      }


    ]



  }


])



function App() {
  return (
    <div className="">


      <RouterProvider router={router} />
    </div>
  );
}

export default App;
