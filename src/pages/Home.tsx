import React, { useEffect, useState } from "react";
import { fetchBookList } from "../service/api";
import { Link } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Book } from "../model/book";

const Home: React.FC = () => {

    const [book, setBook] = useState<Book[]>([]);

    useEffect(() => {
        const getBook = async () => {
            const result = await fetchBookList();
            setBook(result);
        };
        getBook();
    }, []);

    const detailsBook = (rowData: Book) => {
        return (
            <Link to={`/details/${rowData.id}`}>
                <Button label="Visualizar" icon="pi pi-info" />
            </Link>
        );
    };
    return (
        <div>
            <h1>Lista de Livros de Stephen King</h1>
            <div className="card">
                <DataTable value={book}
                    tableStyle={{ minWidth: '50rem' }}
                    emptyMessage="Livros não encontrados."
                >
                    <Column field="id" header="Código"></Column>
                    <Column field="Title" header="Título"></Column>
                    <Column field="Details" body={detailsBook}></Column>
                </DataTable>
            </div>
        </div>
    );
}
export default Home