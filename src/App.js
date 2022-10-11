import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import StartQuiz from './Components/StartQuiz/StartQuiz';
import Chart from './Chart/Chart';
import ErrorrPage from './Components/ErrorPage/ErrorrPage';
import Qustions from './Components/Qustions/Qustions';







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
      },

      {
        path: "/chart",
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz?fbclid=IwAR11DkBDb8MUgxeo7F68DE_Dtd-M93_DCQbM3WKemzVH22z6LEXQwpcwUg0')
        },
        element: <Chart></Chart>
      },

      {
        path: "*", element: <ErrorrPage />
      },
      {
        path: "/question",
        element: <Qustions />
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
