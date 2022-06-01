import { useState } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
const book = [
  {

    "publisher": "voge",
    "author": "Robert ski",
    "name": "Pai Rico",
    "year": 1997675675,
    "dimensions": "148 x 229 x 16",
    "description": "Pai Rico, de alguém.",
    "state": "Used",
    "cover": "paper back",
    "language": "Português",
    "genre": "Personal finance",
    "isbn": 9789896683122,
    "price": 17.59,
    "pages": 336,
    "id": 1321434

  }
  ,
  {

    "publisher": "gais",
    "author": "Roberto leal",
    "name": "Pai Pobre",
    "year": 1997,
    "dimensions": "148 x 229 x 16",
    "description": "Pai Rico, Pai Pobre é o primeiro best-seller de Robert Kiyosaki e Sharon Lechter. Ele advoga a busca pela independência financeira através de investimento, imóveis, ter seu próprio negócio e o uso de táticas financeiras de proteção do patrimônio. O elemento central reiterado por Kiyosaki e Lechter é a defesa da tese de se possuir o sistema ou os meios de produção, ao invés de ser um empregado de alguém.",
    "state": "New",
    "cover": "paper back",
    "language": "Português",
    "genre": "Personal finance",
    "isbn": 9789896683122,
    "price": 20,
    "pages": 336,
    "id": 241423145

  },
  {

    "publisher": "vogais",
    "author": "Clinton",
    "name": "Rico Pobre",
    "year": 1997,
    "dimensions": "148 x 229 x 16",
    "description": "Pai Rico, Pai Pobre é o primeiro best-seller de Robert Kiyosaki e Sharon Lechter. Ele advoga a busca pela independência financeira através de investimento, imóveis, ter seu próprio negócio e o uso de táticas financeiras de proteção do patrimônio. O elemento central reiterado por Kiyosaki e Lechter é a defesa da tese de se possuir o sistema ou os meios de produção, ao invés de ser um empregado de alguém.",
    "state": "Used",
    "cover": "paper back",
    "language": "Português",
    "genre": "Personal finance",
    "isbn": 9789896683122,
    "price": 200,
    "pages": 336,
    "id": 6234687234

  },
  {

    "publisher": "glizzy",
    "author": "Kiyosaki",
    "name": "Pai Pai",
    "year": 1997,
    "dimensions": "148 x 229 x 16",
    "description": "Pai Rico, Pai Pobre é o primeiro best-seller de Robert Kiyosaki e Sharon Lechter. Ele advoga a busca pela independência financeira através de investimento, imóveis, ter seu próprio negócio e o uso de táticas financeiras de proteção do patrimônio. O elemento central reiterado por Kiyosaki e Lechter é a defesa da tese de se possuir o sistema ou os meios de produção, ao invés de ser um empregado de alguém.",
    "state": "Used",
    "cover": "paper back",
    "language": "Português",
    "genre": "Personal finance",
    "isbn": 9789896683122,
    "price": 40,
    "pages": 336,
    "id": 3

  }
]

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component
        {...pageProps}
        books={book} />
    </Layout>
  )
}

export default MyApp
