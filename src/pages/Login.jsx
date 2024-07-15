import React from "react";
import Input from '../components/Input';
import Button from '../components/Button';
import Text from '../components/Text';
import Media from '../components/Media';

function Login(){
    return(
      <div className='grid grid-cols-1 md:grid-cols-2 p-8 w-2/3 '>
          <div className='bg-stone-100 grid grid-cols-1 gap-5 justify-items-center content-center justify-center font-semibold'>
              <Text className="text-4xl " content='Signin' />
              <Input name="username" />
              <Input name="********" />
              <Button className="bg-green-700 border-none rounded-md h-14 w-5/6 text-center text-white" name="Signin" />
              <Text content="or signin with" />
              <div className="flex gap-3">
                <Media url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQ2FJlq4HyJEo7JdbbMPRl18yN0gSk6BWS5ZFgDIDgTqMXgql3N0B-0EqiRiAeXYzW-I&usqp=CAU" />
                <Media url="https://www.sendible.com/hs-fs/hubfs/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png?width=120&name=sm-icons-facebook-logo.png" />
                <Media url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nd82eFk5SaBPRIeCpmwL7A4YSokA-kXSmw&s" />
              </div>
           </div>
           <div className='bg-green-800 grid grid-cols-1 gap-5 justify-items-center justify-center content-center text-white'>
             <Text className="text-4xl" content='Wellcome Back!'/>
             <Text className="text-center m-3" content="Note that the development build is not use npm run build.Development build is not optimized.To create a production build,Note that the development build is not optimized.To create a production build," />
             <Button className="bg-green-700 border-none h-14 w-1/2 text-center rounded-full" name="SignNo account yet? signup!" />
            </div>
     </div>
    )
}
export default Login;