import React from 'react';
import Head from './components/Head';
import Footer from './components/Footer';
import { useState } from 'react'
import TodoList from './components/TodoList';

function App() {


  return (
    <div>

      {/* header section */}
        <Head main = "Minimal Todo List" firstname = "Nonthawat" lastname = "Kongsichai" id = {610610547}></Head>

      {/* todo section */}
       <TodoList></TodoList>

      {/* footer section */}
       <Footer></Footer>
    </div>
  );
}

export default App;
