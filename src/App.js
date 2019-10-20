import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MoviesCategory from './views/MoviesCategory';
import MovieDetail from './views/MovieDetail';
import NotFound from './views/NotFound';
import NavigationBar from './components/NavigationBar';





function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/category/:categoryName" exact component={MoviesCategory}/>
          <Route path="/movie/:id" exact component={MovieDetail}/>
          <Redirect path='/' to='category/popular' />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
