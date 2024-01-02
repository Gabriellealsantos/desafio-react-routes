import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import About from './routes/HomeMain/About/index.tsx'
import Home from './routes/HomeMain/Home/index.tsx'
import NotFound from './routes/HomeMain/NotFound/index.tsx'
import Products from './routes/HomeMain/Products/index.tsx'
import Books from './routes/HomeMain/Products/Books/index.tsx'
import Computers from './routes/HomeMain/Products/Computers/index.tsx'
import Electronics from './routes/HomeMain/Products/Electronics/index.tsx';
import HomeMain from './routes/HomeMain/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeMain />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path="computers" element={<Computers />} />
          <Route path="eletronics" element={<Electronics />} />
          <Route path="books" element={<Books />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
