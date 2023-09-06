import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css'; // Importa tu archivo CSS personalizado

var file = [
    // Datos de ejemplo
    {id: 1, content: 'Contenido 1', name: 'Nombre', description: 'descripcion'},
    {id: 2, content: 'Contenido 2', name: 'Nombre', description: 'descripcion'},
    {id: 3, content: 'Contenido 3', name: 'Nombre', description: 'descripcion'}
    // ... otros datos
];

const Slider = () => {
    const [data, setData] = useState(file);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
        console.log(currentIndex)
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 text-center mb-3">
                    <button onClick={handlePrev} className="btn btn-primary">Anterior</button>
                    {/*<button onClick={handleNext} className="btn btn-primary ml-2">Siguiente</button>*/}
                </div>
            </div>
            <div className="row">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className={`col-4 slider-item ${index === currentIndex ? 'active' : 'inactive'}`}
                    >
                        <div className={`card mb-3 ${index !== currentIndex ? 'compact' : ''}`}>
                            <div className="card-body">
                                <h5 className={`card-title ${index === currentIndex ? '' : 'inactiveFull'}`}>Tabla {item.id}</h5>
                                <table className="table">
                                    <tbody>
                                    {data.map((item) => (
                                        <tr
                                            className={`card-title ${index === currentIndex ? '' : 'inactiveFull' && item.selected ? '' : 'inactiveFull'}`}
                                            key={item.id}>
                                            <td onClick={handleNext}>{item.content}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
