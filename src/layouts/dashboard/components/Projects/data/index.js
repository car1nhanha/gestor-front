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

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import acre from "assets/images/states_brasil/02-acre-rounded@4x.png";
import alagoas from "assets/images/states_brasil/03-alagoas-rounded@4x.png";
import amapa from "assets/images/states_brasil/04-amapa-rounded@4x.png";
import amazonas from "assets/images/states_brasil/05-amazonas-rounded@4x.png";
import bahia from "assets/images/states_brasil/07-ceara-rounded-v2@4x.png";
import ceara from "assets/images/states_brasil/07-ceara-rounded@4x.png";
import distritoFederal from "assets/images/states_brasil/08-distrito-federal-rounded@4x.png";
import espiritoSanto from "assets/images/states_brasil/09-espirito-santo-rounded-v2@4x.png";
import goias from "assets/images/states_brasil/10-goias-rounded@4x.png";
import maranhao from "assets/images/states_brasil/11-maranhao-rounded@4x.png";
import matoGrosso from "assets/images/states_brasil/12-mato-grosso-rounded@4x.png";
import matoGrossoDoSul from "assets/images/states_brasil/13-mato-grosso-do-sul-rounded@4x.png";
import minasGerais from "assets/images/states_brasil/14-minas-gerais-rounded@4x.png";
import para from "assets/images/states_brasil/15-para-rounded@4x.png";
import paraiba from "assets/images/states_brasil/16-paraiba-rounded@4x.png";
import parana from "assets/images/states_brasil/17-parana-rounded@4x.png";
import pernambuco from "assets/images/states_brasil/18-pernambuco-rounded@4x.png";
import piaui from "assets/images/states_brasil/19-piaui-rounded@4x.png";
import rioDeJaneiro from "assets/images/states_brasil/20-rio-de-janeiro-rounded@4x.png";
import rioGrandeDoNorte from "assets/images/states_brasil/21-rio-grande-do-norte-rounded@4x.png";
import rioGrandeDoSul from "assets/images/states_brasil/22-rio-grande-do-sul-rounded@4x.png";
import rondonia from "assets/images/states_brasil/23-rondonia-rounded@4x.png";
import roraima from "assets/images/states_brasil/24-roraima-rounded@4x.png";
import santaCatarina from "assets/images/states_brasil/25-santa-catarina-rounded@4x.png";
import saoPaulo from "assets/images/states_brasil/26-sao-paulo-rounded@4x.png";
import sergipe from "assets/images/states_brasil/27-sergipe-rounded@4x.png";
import tocantins from "assets/images/states_brasil/28-tocantins-rounded@4x.png";
import team1 from "assets/images/team-1.jpg";
import MDAvatar from "components/MDAvatar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const mockData = [
  {
    stateName: "Acre",
    stateImage: acre,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Alagoas",
    stateImage: alagoas,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Amapá",
    stateImage: amapa,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Amazonas",
    stateImage: amazonas,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Bahia",
    stateImage: bahia,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Ceará",
    stateImage: ceara,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Distrito Federal",
    stateImage: distritoFederal,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Espírito Santo",
    stateImage: espiritoSanto,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Goiás",
    stateImage: goias,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Maranhão",
    stateImage: maranhao,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Mato Grosso",
    stateImage: matoGrosso,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Mato Grosso do Sul",
    stateImage: matoGrossoDoSul,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Minas Gerais",
    stateImage: minasGerais,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Pará",
    stateImage: para,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Paraíba",
    stateImage: paraiba,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Paraná",
    stateImage: parana,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Pernambuco",
    stateImage: pernambuco,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Piauí",
    stateImage: piaui,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Rio de Janeiro",
    stateImage: rioDeJaneiro,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Rio Grande do Norte",
    stateImage: rioGrandeDoNorte,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Rio Grande do Sul",
    stateImage: rioGrandeDoSul,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Rondônia",
    stateImage: rondonia,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Roraima",
    stateImage: roraima,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Santa Catarina",
    stateImage: santaCatarina,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "São Paulo",
    stateImage: saoPaulo,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Sergipe",
    stateImage: sergipe,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
  {
    stateName: "Tocantins",
    stateImage: tocantins,
    dirigentes: ["João", "Maria", "Lucas"],
    membros: randomIntFromInterval(1, 100),
  },
];

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  // editável
  return {
    // columns: [
    //   { Header: "companies", accessor: "companies", width: "45%", align: "left" },
    //   { Header: "members", accessor: "members", width: "10%", align: "left" },
    //   { Header: "budget", accessor: "budget", align: "center" },
    //   { Header: "completion", accessor: "completion", align: "center" },
    // ],

    columns: [
      { Header: "Estados", accessor: "stateName", width: "20%", align: "left" },
      { Header: "Dirigentes", accessor: "dirigentes", width: "20%", align: "left" },
      { Header: "Membros", accessor: "membros", width: "20%", align: "left" },
    ],

    rows: mockData.map((state) => ({
      stateName: <Company image={state.stateImage} name={state.stateName} />,
      dirigentes: (
        <MDBox display="flex" py={1}>
          {avatars(state.dirigentes.map((dirigente) => [team1, dirigente]))}
          {/* {avatars([
            [team1, "Ryan Tompson"],
            [team2, "Romina Hadid"],
            [team3, "Alexander Smith"],
            [team4, "Jessica Doe"],
          ])} */}
        </MDBox>
      ),
      membros: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {state.membros}
        </MDTypography>
      ),
    })),

    // editável
    // rows: [
    //   {
    //     companies: <Company image={logoXD} name="Material UI XD Version" />,
    //     members: (
    //       <MDBox display="flex" py={1}>
    //         {avatars([
    //           [team1, "Ryan Tompson"],
    //           [team2, "Romina Hadid"],
    //           [team3, "Alexander Smith"],
    //           [team4, "Jessica Doe"],
    //         ])}
    //       </MDBox>
    //     ),
    //     budget: (
    //       <MDTypography variant="caption" color="text" fontWeight="medium">
    //         $14,000
    //       </MDTypography>
    //     ),
    //     completion: (
    //       <MDBox width="8rem" textAlign="left">
    //         <MDProgress value={60} color="info" variant="gradient" label={false} />
    //       </MDBox>
    //     ),
    //   },
    //   {
    //     companies: <Company image={logoAtlassian} name="Add Progress Track" />,
    //     members: (
    //       <MDBox display="flex" py={1}>
    //         {avatars([
    //           [team2, "Romina Hadid"],
    //           [team4, "Jessica Doe"],
    //         ])}
    //       </MDBox>
    //     ),
    //     budget: (
    //       <MDTypography variant="caption" color="text" fontWeight="medium">
    //         $3,000
    //       </MDTypography>
    //     ),
    //     completion: (
    //       <MDBox width="8rem" textAlign="left">
    //         <MDProgress value={10} color="info" variant="gradient" label={false} />
    //       </MDBox>
    //     ),
    //   },
    //   {
    //     companies: <Company image={logoSlack} name="Fix Platform Errors" />,
    //     members: (
    //       <MDBox display="flex" py={1}>
    //         {avatars([
    //           [team1, "Ryan Tompson"],
    //           [team3, "Alexander Smith"],
    //         ])}
    //       </MDBox>
    //     ),
    //     budget: (
    //       <MDTypography variant="caption" color="text" fontWeight="medium">
    //         Not set
    //       </MDTypography>
    //     ),
    //     completion: (
    //       <MDBox width="8rem" textAlign="left">
    //         <MDProgress value={100} color="success" variant="gradient" label={false} />
    //       </MDBox>
    //     ),
    //   },
    //   {
    //     companies: <Company image={logoSpotify} name="Launch our Mobile App" />,
    //     members: (
    //       <MDBox display="flex" py={1}>
    //         {avatars([
    //           [team4, "Jessica Doe"],
    //           [team3, "Alexander Smith"],
    //           [team2, "Romina Hadid"],
    //           [team1, "Ryan Tompson"],
    //         ])}
    //       </MDBox>
    //     ),
    //     budget: (
    //       <MDTypography variant="caption" color="text" fontWeight="medium">
    //         $20,500
    //       </MDTypography>
    //     ),
    //     completion: (
    //       <MDBox width="8rem" textAlign="left">
    //         <MDProgress value={100} color="success" variant="gradient" label={false} />
    //       </MDBox>
    //     ),
    //   },
    //   {
    //     companies: <Company image={logoJira} name="Add the New Pricing Page" />,
    //     members: (
    //       <MDBox display="flex" py={1}>
    //         {avatars([[team4, "Jessica Doe"]])}
    //       </MDBox>
    //     ),
    //     budget: (
    //       <MDTypography variant="caption" color="text" fontWeight="medium">
    //         $500
    //       </MDTypography>
    //     ),
    //     completion: (
    //       <MDBox width="8rem" textAlign="left">
    //         <MDProgress value={25} color="info" variant="gradient" label={false} />
    //       </MDBox>
    //     ),
    //   },
    //   {
    //     companies: <Company image={logoInvesion} name="Redesign New Online Shop" />,
    //     members: (
    //       <MDBox display="flex" py={1}>
    //         {avatars([
    //           [team1, "Ryan Tompson"],
    //           [team4, "Jessica Doe"],
    //         ])}
    //       </MDBox>
    //     ),
    //     budget: (
    //       <MDTypography variant="caption" color="text" fontWeight="medium">
    //         $2,000
    //       </MDTypography>
    //     ),
    //     completion: (
    //       <MDBox width="8rem" textAlign="left">
    //         <MDProgress value={40} color="info" variant="gradient" label={false} />
    //       </MDBox>
    //     ),
    //   },
    // ],
  };
}
