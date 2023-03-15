import "./Task.css";
// props -> propriedades
export function Task(props) {
    // desestruturação
    // let { title } = props; // let title = props.title;
    const { title, media, deadline } = props;

    let color = "blue";
    if(media >=8) {
        color = "green";
    }
    else if(media === "Atrasado") {
        color = "red";
    }
    else {
        color = "blue";
    }
    const objectStyle = { color };

    return (
        <div className="task">
            <strong>
                {title} {/*Interpolação*/}
            </strong>
            <div className="details">
                <span className="media" style={objectStyle}>
                    {media}
                </span>
                <span className="deadline">
                    {deadline}
                </span>
            </div>
        </div>
    );
}

// export function Task({ title, media, deadline }) {
//     return (
//         <div className="task">
//             <strong>
//                 {title}
//             </strong>
//             <div className="details">
//                 <span className="media">
//                     {media}
//                 </span>
//                 <span className="deadline">
//                     {deadline}
//                 </span>
//             </div>
//         </div>
//     );
// }