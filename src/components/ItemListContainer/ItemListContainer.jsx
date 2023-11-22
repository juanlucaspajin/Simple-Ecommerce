import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './itemListContainer.css'

function ItemListContainer() {
    const { categoryId } = useParams();
    const [cursosByCategory, setCursosByCategory] = useState([]);
    useEffect(() => {
        selectCursos();
    }, [cursosByCategory])

    const cursos = [
        {
            id: 1,
            category: 'canto',
            name: 'Canto 1',
            pic: 'https://media.istockphoto.com/id/1171092500/photo/happy-african-man-in-hat-singing-into-smartphone-like-microphone.jpg?s=612x612&w=0&k=20&c=ool6e1Swh52ov6j-Wcc2CTJif8jJGqeF98tUo4CHDmg='
        },
        {
            id: 2,
            category: 'piano',
            name: 'Piano 1',
            pic: 'https://millersmusic.co.uk/cdn/shop/articles/Blog_Image_40.png?v=1681389491'
        }
    ];

    const selectCursos = () => {
        let cursosByCategory = [];
        if (categoryId != undefined) {
            cursosByCategory = cursos.filter(element => element.category == categoryId)
        } else {
            cursosByCategory = cursos
        }
        setCursosByCategory(cursosByCategory)
    }

    return (
        <div className='item-container'>
            <h1>Mis cursos</h1>
            <div className='row'>
                {cursosByCategory.map(element =>
                    <div className='col-md-3' key={element.id}>
                        <div className="card card-container">
                            <img src={element.pic} className="card-img-top" alt={element.name} />
                            <div className="card-body">
                                <h5 className="card-title">{element.name}</h5>
                                <Link to={`/item/${element.id}`}>
                                    Ver detalle del curso
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemListContainer;