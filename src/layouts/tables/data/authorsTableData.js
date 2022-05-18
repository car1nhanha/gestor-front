/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
// Images
import MDAvatar from "components/MDAvatar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { api } from "providers/axios";
import { useEffect, useState } from "react";

export default function data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/users").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  const users = [
    {
      nome: "Valdevino",
      sobrenome: "Martins",
      email: "Jocemar_Oliveira23@bol.com.br",
      avatar:
        "https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg",
      function: "Volintário",
      dataInscricao: "2021-12-21T12:59:06.186Z",
    },
    {
      nome: "Djackson",
      sobrenome: "Franco",
      email: "Daniela.Reis@gmail.com",
      avatar:
        "https://portalmaratimba.com.br/wp-content/uploads/2020/03/pessoa-facil-de-gostar.jpg",
      function: "Volintário",
      dataInscricao: "2022-01-25T22:14:38.507Z",
    },
    {
      nome: "Doracy",
      sobrenome: "Souza",
      email: "Bizunish4@live.com",
      avatar:
        "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/06/15/1790037284-10-dicas-para-saber-se-voce-esta-com-a-pessoa-certa-17686.jpg",
      function: "Volintário",
      dataInscricao: "2021-09-26T11:24:48.330Z",
    },
    {
      nome: "Vera",
      sobrenome: "Melo",
      email: "Lars.Pereira6@yahoo.com",
      avatar: "https://miro.medium.com/max/1250/1*Y9EESyPeXO5bXTR2Ld7h3w.jpeg",
      function: "Volintário",
      dataInscricao: "2021-09-28T01:20:15.156Z",
    },
    {
      nome: "Oscild",
      sobrenome: "Batista",
      email: "Munekazu.Martins57@live.com",
      avatar:
        "https://uploads-anchieta-br.s3.sa-east-1.amazonaws.com/wp-content/uploads/sites/7/2019/04/01141103/foto-pessoas-falam-mal-1-1068x601.jpg",
      function: "Volintário",
      dataInscricao: "2021-05-17T18:43:11.660Z",
    },
    {
      nome: "Tatiani",
      sobrenome: "Braga",
      email: "Cynthia65@live.com",
      avatar: "https://hypescience.com/wp-content/uploads/2010/03/feliz.jpg",
      function: "Volintário",
      dataInscricao: "2021-06-16T10:05:42.916Z",
    },
    {
      nome: "Rocio",
      sobrenome: "Nogueira",
      email: "Dirce20@gmail.com",
      avatar: "https://blog.pajaris.com.br/wp-content/uploads/2020/06/e-girl-9.jpg",
      function: "Volintário",
      dataInscricao: "2021-10-07T09:46:38.971Z",
    },
    {
      nome: "Martelenes",
      sobrenome: "Franco",
      email: "Angelina_Moreira73@live.com",
      avatar:
        "https://tangerino.com.br/blog/wp-content/uploads/2021/03/cursos-de-gestao-de-pessoas-1.jpg",
      function: "Volintário",
      dataInscricao: "2021-07-29T18:31:53.015Z",
    },
    {
      nome: "Verônica",
      sobrenome: "Pereira",
      email: "Aminadab_Saraiva@yahoo.com",
      avatar: "https://i.pinimg.com/originals/76/ef/b7/76efb7c94755748d695d3d46cf11d08d.jpg",
      function: "Volintário",
      dataInscricao: "2021-11-08T05:39:07.187Z",
    },
  ];

  const Voluntario = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Voluntário", accessor: "voluntario", width: "45%", align: "left" },
      { Header: "Função", accessor: "function", width: "45%", align: "left" },
      { Header: "Inscrição", accessor: "createdAt", width: "45%", align: "left" },
    ],

    rows: data.map((user) => ({
      voluntario: <Voluntario image={user.avatar} name={`${user.name}`} email={user.email} />,
      function: <Job title={user.function} description="Organization" />,
      createdAt: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {new Date(user.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </MDTypography>
      ),
    })),
  };
}
