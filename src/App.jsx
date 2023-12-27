import "./App.css";
import { Course } from "./Course";

function App() {
  return (
    <>
      <header>
        <h1>Cards</h1>
      </header>
      <div className="container">
        <Course
          title="JavaScript"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias, laudantium eligendi velit doloribus totam officia labore tenetur, aliquam facere dicta quis officiis cum non nihil ut. Delectus, est odio."
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
        />
        <Course
          title="Java"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias, laudantium eligendi velit doloribus totam officia labore tenetur, aliquam facere dicta quis officiis cum non nihil ut. Delectus, est odio."
          imgUrl="https://logowik.com/content/uploads/images/java1655.logowik.com.webp"
        />
        <Course
          title="Python"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias, laudantium eligendi velit doloribus totam officia labore tenetur, aliquam facere dicta quis officiis cum non nihil ut. Delectus, est odio."
          imgUrl="https://itel.com.sg/wp-content/uploads/2019/04/python.png"
        />
        <Course
          title="C#"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias, laudantium eligendi velit doloribus totam officia labore tenetur, aliquam facere dicta quis officiis cum non nihil ut. Delectus, est odio."
          imgUrl="https://res.cloudinary.com/teepublic/image/private/s--2B6xNmkp--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_262c3a,e_outline:48/co_262c3a,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1571954737/production/designs/6458087_0.jpg"
        />
      </div>
    </>
  );
}

export default App;
