import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faLaptop,  } from '@fortawesome/free-solid-svg-icons';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import { userInfoLists } from "./Explore_temp";


function ExploreProfileList(props) {
  console.log('props:' ,props);
  return (
    // react-reveal 'Pulse cascade'적용을 위한 props 전달 //
      <div className="searchProfile" {...props}> 
        <div className="profileImage">
        <FontAwesomeIcon icon={faUserCircle} />
        </div>
        <p> 정리벽 개발자 </p>
        <div className="socialInfo">
          <div>
            <div> 28 </div>
            <div> Recollects </div>
          </div>
          <div>
            <div> 214 </div>
            <div> Following </div>
          </div>
          <div>
            <div> 280 </div>
            <div> Followers </div>
          </div>
        </div>
        <div className="companyInfo">
          <div>
            <FontAwesomeIcon icon={faLaptop} /> Programmer at KaKao
          </div>
          <div>
          <FontAwesomeIcon icon={faGithub} /> github.com/re-collect
          </div>
        </div>
      </div>

  );
}

export default ExploreProfileList;
