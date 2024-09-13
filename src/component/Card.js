import { useState } from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

function Card({course,likedCourses,setLikedCourses}){

  //  const [clicked,setClick]=
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev)  => prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed");
        }
        else{
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("Liked successfully");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hiden"> 
            <div className="relative">
                <img src={course.image.url}></img>

                <div className="w-[40px] h-[40px] bg-white rounded-full 
                    absolute right-2 bottom-3 grid place-items-center" >
                 <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id)?
                        (<FcLike fontSize="1.5rem"></FcLike>):
                        (<FcLikePlaceholder fontSize="1.5rem"></FcLikePlaceholder>)
                    }
                 </button>
                </div>

            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length>100?
                        (`${course.description.substr(0,100)}...`):(course.description)
                    }
                </p>
            </div>
        </div>
    )
}
export default Card;