//import as componentes de classe
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBookDetailById } from "../service/api";

import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Book } from "../model/book";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null)
    const navigate = useNavigate();
    useEffect(() => {
        const getBookDetails = async () => {
            try {
                if (id) {
                    const result = await fetchBookDetailById(id);
                    setBook(result)
                }
            } catch (error) {
                console.error(error);
            }
        };
        getBookDetails();
    }, [id]);

    if (!book) {
        return <div>Carregando...</div>
    }

    const voltar = () => {
        navigate(-1);
    }
    return (
        <div className="p-grid p-justify-center">
            <div className="p-col-12 p-md-8">
                <Card
                    title={book.Title}
                    style={{ width: '100%', padding: '2rem' }}
                    className="shadow-4"
                >
                    <div className="p-grid">
                        <div className="p-col-6">
                            <p><b>Ano de Lançamento: </b> {book.Year}</p>
                        </div>
                        <div className="p-col-6">
                            <p><b>Editora: </b> {book.Publisher}</p>
                        </div>
                        <div className="p-col-6">
                            <p><b>ISBN: </b> {book.ISBN}</p>
                        </div>
                        <div className="p-col-6">
                            <p><b>Quantidade de Páginas: </b> {book.Pages}</p>
                        </div>
                    </div>

                    <Divider />
                    <div className="card">
                        <DataTable value={book.villains}
                            tableStyle={{ minWidth: '50rem' }}
                            emptyMessage="Vilões não encontrados."
                        >
                            <Column field="name" header="Vilões"></Column>
                        </DataTable>
                    </div>
                    <div className="p-mb-4" style={{ textAlign: 'center' }}>
                        <Button label="Voltar" icon="pi pi-arrow-left" className="p-button-secondary" onClick={voltar} />
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default Details
