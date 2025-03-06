import React from 'react'
import {Button,Logo} from "./index"

function Header() {
  return (
    <header
      className='py-3 shadow bg-gray-900 border-b-2 border-b-white w-full 'data-aos="fade-up">

        <nav className='flex'>
          <div className='mr-4'>
            <Logo />
          </div>

          <ul className='flex ml-auto text-white gap-6'>
          <li><Button> Home </Button></li>
          <li ><Button>Login </Button></li>
           <li><Button>SignUp</Button> </li>
           <li><Button>Local Dataset</Button> </li>
           <li><Button>Fast Text Embedding</Button> </li>
           <li><Button>Run All Algorithm</Button> </li>
           <li><Button>Predict DeepFake</Button> </li>
           <li><Button>Logout</Button> </li>


          </ul>
        </nav>

    </header>
  
  )
}

export default Header

// inline-block px-6 py-2 duration-200
//               hover:bg-blue-500 rounded-full cursor-pointer