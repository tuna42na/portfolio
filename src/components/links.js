import React from 'react';
import bass from '../images/bass.svg';
import code from '../images/code.svg';
import code_pen from '../images/code_pen.svg';
import resume from '../images/resume.svg';
import { Container, Row } from 'reactstrap';


export class Links extends React.Component{
    
    render(){
        const jobs = [];
        jobs.push({image: code ,title:'Code', href:"https://github.com/tuna42na"});
        jobs.push({image: bass ,title:'Music', href : ""});
        jobs.push({image: code_pen ,title:'Codepen', href : "https://codepen.io/tuna42na/"});
        jobs.push({image: resume ,title:'Resume', href : "../images/tuna-resume.pdf"});

        const items = jobs.map((job, i) =>
            
                <div key={i}>
                  <a href={job.href}>
                    <img 
                        src={`${job.image}`} 
                        alt={`${job.title}`} 
                    />
                    </a> 
                </div>
            
        );

    return(
        <Container>
        <div className="outbound-links-container">
           {items}
        </div>
        </Container>
    );
    }
}