import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Following() {
    const [learningPath, setLearningPath] = useState([]);

    useEffect(() => {
        fetch('https://api-web-flask.onrender.com/get_Learning_Path')
            .then((res) => res.json())
            .then((data) => setLearningPath(data));
    }, []);

    return (
        <div>
            <h1>Learning Path</h1>
            <ul>
                {learningPath.map((path, index) => (
                    <li key={index}>{path}</li>
                ))}
            </ul>
        </div>
    );
    // const semester1 = subjects.slice(0, 3);
    // const semester2 = subjects.slice(3, 6);
    // const semester3 = subjects.slice(6, 9);
    // const semester4 = subjects.slice(9, 12);
    // const semester5 = subjects.slice(12, 15);
    // const semester6 = subjects.slice(15, 18);
    // return (
    //     <div className={cx('wrapper')}>
    //         <div className={cx('inner')}>
    //             <div className={cx('container')}>
    //                 <h2 className={cx('page-title')}>Learning path </h2>
    //                 <div>
    //                     <ul>Semester 1</ul>
    //                     {semester1.map((subject, index) => (
    //                         <li key={index}>{subject}</li>
    //                     ))}

    //                     <ul>Semester 2</ul>
    //                     {semester2.map((subject, index) => (
    //                         <li key={index}>{subject}</li>
    //                     ))}

    //                     <ul>Semester 3</ul>
    //                     {semester3.map((subject, index) => (
    //                         <li key={index}>{subject}</li>
    //                     ))}

    //                     <ul>Semester 4</ul>
    //                     {semester4.map((subject, index) => (
    //                         <li key={index}>{subject}</li>
    //                     ))}

    //                     <ul>Semester 5</ul>
    //                     {semester5.map((subject, index) => (
    //                         <li key={index}>{subject}</li>
    //                     ))}

    //                     <ul>Semester 6</ul>
    //                     {semester6.map((subject, index) => (
    //                         <li key={index}>{subject}</li>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default Following;
