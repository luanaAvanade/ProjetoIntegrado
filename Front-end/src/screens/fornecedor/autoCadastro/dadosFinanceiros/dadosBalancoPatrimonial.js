import React, { useState, useEffect, Fragment } from 'react';
import moment from 'moment';
import { Card, CardHeader, CardContent, Box } from '@material-ui/core';
import _ from 'lodash';
import { Button, Modal, FormInput } from '@/components';
import { moedaMask, moeda } from '@/utils/mascaras';
import { translate, translateWithHtml } from '@/locales';
import { checkError } from '@/utils/validation';
import theme from '@/theme';
import { BALANCO_PATRIMONIAL, ENUM_ITEMS_ANALISE } from '@/utils/constants';
import ObjectHelper from '@/utils/objectHelper';
import { soNumero } from '@/utils/mascaras';
import { CabecalhoHorizontal } from './style';
import Aprovacao from '@/screens/fornecedor/autoCadastro/aprovacao';

export default function DadosBalancoPatrimonial({
	dadosMocadoBalanco,
	formulario,
	itensAnalise,
	setItensAnalise,
	comentarios,
	setComentarios,
	historicoEmpresa,
	dataAbertura,
	user,
	disableEdit,
	statusEmpresa
}) {
	const { submitCount, getFieldProps, setFieldValue, setFieldTouched } = formulario;

	// Estado Local

	const [
		openMsgErroRevisaoBalanco,
		setOpenMsgErroRevisaoBalanco
	] = useState(false);

	const [
		erros,
		setErros
	] = useState(translate('dadosLancadosContemErro'));

	const cabecalhoInicial = [
		{ codigo: '', label: '' }
	];

	const [
		cabecalho,
		setCabecalho
	] = useState(cabecalhoInicial);

	// Efeitos

	useEffect(() => {
		return () => {
		};
	}, []);

	useEffect(
		() => {
			return () => {
				setCabecalho(cabecalhoInicial);
			};
		},
		[
			0
		]
	);



	const [
		ativoTotal,
		metadataAtivoTotal
	] = getFieldProps('ativoTotal', 'text');

	const [
		circulanteAtivo,
		metadataCirculanteAtivo
	] = getFieldProps('circulanteAtivo', 'text');

	const [
		outrosAtivosCirculante,
		metadataOutrosAtivosCirculante
	] = getFieldProps('outrosAtivosCirculante', 'text');

	const [
		disponibilidades,
		metadataDisponibilidades
	] = getFieldProps('disponibilidades', 'text');

	const [
		estoques,
		metadataEstoques
	] = getFieldProps('estoques', 'text');

	const [
		ativoNaoCirculante,
		metadataAtivoNaoCirculante
	] = getFieldProps('ativoNaoCirculante', 'text');

	const [
		passivoTotal,
		metadataPassivoTotal
	] = getFieldProps('passivoTotal', 'text');

	const [
		circulantePassivo,
		metadataCirculantePassivo
	] = getFieldProps('circulantePassivo', 'text');
	
	const [
		emprestimosFinanciamentoCirculante,
		metadataEmprestimosFinanciamentoCirculante
	] = getFieldProps('emprestimosFinanciamentoCirculante', 'text');

	const [
		outrosPassivosCirculantes,
		metadataOutrosPassivosCirculantes
	] = getFieldProps('outrosPassivosCirculantes', 'text');

	const [
		naoCirculantePassivo,
		metadataNaoCirculantePassivo
	] = getFieldProps('naoCirculantePassivo', 'text');

	const [
		emprestimosFinanciamentoNaoCirculante,
		metadataEmprestimosFinanciamentoNaoCirculante
	] = getFieldProps('emprestimosFinanciamentoNaoCirculante', 'text');

	const [
		outrosPassivosNaoCirculantes,
		metadataOutrosPassivosNaoCirculantes
	] = getFieldProps('outrosPassivosNaoCirculantes', 'text');

	const [
		patrimonioLiquido,
		metadataPatrimonioLiquido
	] = getFieldProps('patrimonioLiquido', 'text');

	const [
		ativoTotalAnoDois,
		metadataAtivoTotalAnoDois
	] = getFieldProps('ativoTotalAnoDois', 'text');

	const [
		circulanteAtivoAnoDois,
		metadataCirculanteAtivoAnoDois
	] = getFieldProps('circulanteAtivoAnoDois', 'text');

	const [
		outrosAtivosCirculanteAnoDois,
		metadataOutrosAtivosCirculanteAnoDois
	] = getFieldProps('outrosAtivosCirculanteAnoDois', 'text');

	const [
		disponibilidadesAnoDois,
		metadataDisponibilidadesAnoDois
	] = getFieldProps('disponibilidadesAnoDois', 'text');

	const [
		estoquesAnoDois,
		metadataEstoquesAnoDois
	] = getFieldProps('estoquesAnoDois', 'text');

	const [
		ativoNaoCirculanteAnoDois,
		metadataAtivoNaoCirculanteAnoDois
	] = getFieldProps('ativoNaoCirculanteAnoDois', 'text');

	const [
		passivoTotalAnoDois,
		metadataPassivoTotalAnoDois
	] = getFieldProps('passivoTotalAnoDois', 'text');

	const [
		circulantePassivoAnoDois,
		metadataCirculantePassivoAnoDois
	] = getFieldProps('circulantePassivoAnoDois', 'text');
	
	const [
		emprestimosFinanciamentoCirculanteAnoDois,
		metadataEmprestimosFinanciamentoCirculanteAnoDois
	] = getFieldProps('emprestimosFinanciamentoCirculanteAnoDois', 'text');

	const [
		outrosPassivosCirculantesAnoDois,
		metadataOutrosPassivosCirculantesAnoDois
	] = getFieldProps('outrosPassivosCirculantesAnoDois', 'text');

	const [
		naoCirculantePassivoAnoDois,
		metadataNaoCirculantePassivoAnoDois
	] = getFieldProps('naoCirculantePassivoAnoDois', 'text');

	const [
		emprestimosFinanciamentoNaoCirculanteAnoDois,
		metadataEmprestimosFinanciamentoNaoCirculanteAnoDois
	] = getFieldProps('emprestimosFinanciamentoNaoCirculanteAnoDois', 'text');

	const [
		outrosPassivosNaoCirculantesAnoDois,
		metadataOutrosPassivosNaoCirculantesAnoDois
	] = getFieldProps('outrosPassivosNaoCirculantesAnoDois', 'text');

	const [
		patrimonioLiquidoAnoDois,
		metadataPatrimonioLiquidoAnoDois
	] = getFieldProps('patrimonioLiquidoAnoDois', 'text');

	const [
		ativoTotalAnoTres,
		metadataAtivoTotalAnoTres
	] = getFieldProps('ativoTotalAnoTres', 'text');

	const [
		circulanteAtivoAnoTres,
		metadataCirculanteAtivoAnoTres
	] = getFieldProps('circulanteAtivoAnoTres', 'text');

	const [
		outrosAtivosCirculanteAnoTres,
		metadataOutrosAtivosCirculanteAnoTres
	] = getFieldProps('outrosAtivosCirculanteAnoTres', 'text');

	const [
		disponibilidadesAnoTres,
		metadataDisponibilidadesAnoTres
	] = getFieldProps('disponibilidadesAnoTres', 'text');

	const [
		estoquesAnoTres,
		metadataEstoquesAnoTres
	] = getFieldProps('estoquesAnoTres', 'text');

	const [
		ativoNaoCirculanteAnoTres,
		metadataAtivoNaoCirculanteAnoTres
	] = getFieldProps('ativoNaoCirculanteAnoTres', 'text');

	const [
		passivoTotalAnoTres,
		metadataPassivoTotalAnoTres
	] = getFieldProps('passivoTotalAnoTres', 'text');

	const [
		circulantePassivoAnoTres,
		metadataCirculantePassivoAnoTres
	] = getFieldProps('circulantePassivoAnoTres', 'text');
	
	const [
		emprestimosFinanciamentoCirculanteAnoTres,
		metadataEmprestimosFinanciamentoCirculanteAnoTres
	] = getFieldProps('emprestimosFinanciamentoCirculanteAnoTres', 'text');

	const [
		outrosPassivosCirculantesAnoTres,
		metadataOutrosPassivosCirculantesAnoTres
	] = getFieldProps('outrosPassivosCirculantesAnoTres', 'text');

	const [
		naoCirculantePassivoAnoTres,
		metadataNaoCirculantePassivoAnoTres
	] = getFieldProps('naoCirculantePassivoAnoTres', 'text');

	const [
		emprestimosFinanciamentoNaoCirculanteAnoTres,
		metadataEmprestimosFinanciamentoNaoCirculanteAnoTres
	] = getFieldProps('emprestimosFinanciamentoNaoCirculanteAnoTres', 'text');

	const [
		outrosPassivosNaoCirculantesAnoTres,
		metadataOutrosPassivosNaoCirculantesAnoTres
	] = getFieldProps('outrosPassivosNaoCirculantesAnoTres', 'text');

	const [
		patrimonioLiquidoAnoTres,
		metadataPatrimonioLiquidoAnoTres
	] = getFieldProps('patrimonioLiquidoAnoTres', 'text');


	
	return (
		<Box paddingTop={`${theme.spacing(1)}px`}>
			<Modal
				open={openMsgErroRevisaoBalanco}
				handleClose={() => setOpenMsgErroRevisaoBalanco(false)}
				onClickButton={() => setOpenMsgErroRevisaoBalanco(false)}
				title={translate('revisaoDadosBalanco')}
				textButton={translate('ok')}
			>
			</Modal>

				<Card style={{ marginTop: 8 }}>
					<CardHeader
						title={translateWithHtml('Dados do Balanço Patrimonial 2022')}
						action={
							<Fragment>
								<Box>
									<Aprovacao
										itensAnalise={itensAnalise}
										setItensAnalise={setItensAnalise}
										comentarios={comentarios}
										setComentarios={setComentarios}
										tipoItem={
											ENUM_ITEMS_ANALISE.find(x => x.internalName === 'Dados_Balanco_Patrimonial')
												.value
										}
										historicoEmpresa={historicoEmpresa}
										user={user}
										disableEdit={disableEdit}
										statusEmpresa={statusEmpresa}
									/>
								</Box>
							</Fragment>
						}
					/>


				<CardContent>
					<Box display='flex' flexDirection='row'>
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('ativoTotal')}:`}
								value={soNumero(ativoTotal.value)}
								onChange={event => setFieldValue('ativoTotal', event.target.value)}
								onFocus={() => setFieldTouched('ativoTotal', true)}
								error={checkError(submitCount, metadataAtivoTotal)}
								
							/>
						
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('circulanteAtivo')}:`}
								value={soNumero(circulanteAtivo.value)}
								onChange={event => setFieldValue('circulanteAtivo', event.target.value)}
								onFocus={() => setFieldTouched('circulanteAtivo', true)}
								error={checkError(submitCount, metadataCirculanteAtivo)}
								
							/>
						
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('outrosAtivosCirculante')}:`}
								value={soNumero(outrosAtivosCirculante.value)}
								onChange={event => setFieldValue('outrosAtivosCirculante', event.target.value)}
								onFocus={() => setFieldTouched('outrosAtivosCirculante', true)}
								error={checkError(submitCount, metadataOutrosAtivosCirculante)}
								
							/>
						
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('disponibilidades')}:`}
								value={soNumero(disponibilidades.value)}
								onChange={event => setFieldValue('disponibilidades', event.target.value)}
								onFocus={() => setFieldTouched('disponibilidades', true)}
								error={checkError(submitCount, metadataDisponibilidades)}
								
							/>
						
						</Box>

						</Box>

						<Box display='flex' flexDirection='row'>
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('estoques')}:`}
							value={soNumero(estoques.value)}
							onChange={event => setFieldValue('estoques', event.target.value)}
							onFocus={() => setFieldTouched('estoques', true)}
							error={checkError(submitCount, metadataEstoques)}
							
						/>

						</Box>
		
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('ativoNaoCirculante')}:`}
							value={soNumero(ativoNaoCirculante.value)}
							onChange={event => setFieldValue('ativoNaoCirculante', event.target.value)}
							onFocus={() => setFieldTouched('ativoNaoCirculante', true)}
							error={checkError(submitCount, metadataAtivoNaoCirculante)}
							
						/>
		
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('passivoTotal')}:`}
							value={soNumero(passivoTotal.value)}
							onChange={event => setFieldValue('passivoTotal', event.target.value)}
							onFocus={() => setFieldTouched('passivoTotal', true)}
							error={checkError(submitCount, metadataPassivoTotal)}
							
						/>

						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('circulantePassivo')}:`}
							value={soNumero(circulantePassivo.value)}
							onChange={event => setFieldValue('circulantePassivo', event.target.value)}
							onFocus={() => setFieldTouched('circulantePassivo', true)}
							error={checkError(submitCount, metadataCirculantePassivo)}
							
						/>

						</Box>
						</Box>

						<Box display='flex' flexDirection='row'>

						<Box width='35%' paddingRight={`${theme.spacing(1)}px`}>

<						FormInput
							label={`${translate('emprestimosFinanciamentoCirculante')}:`}
							value={soNumero(emprestimosFinanciamentoCirculante.value)}
							onChange={event => setFieldValue('emprestimosFinanciamentoCirculante', event.target.value)}
							onFocus={() => setFieldTouched('emprestimosFinanciamentoCirculante', true)}
							error={checkError(submitCount, metadataEmprestimosFinanciamentoCirculante)}
							
						/>

						</Box>

						<Box width='35%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('emprestimosFinanciamentoNaoCirculante')}:`}
							value={soNumero(emprestimosFinanciamentoNaoCirculante.value)}
							onChange={event => setFieldValue('emprestimosFinanciamentoNaoCirculante', event.target.value)}
							onFocus={() => setFieldTouched('emprestimosFinanciamentoNaoCirculante', true)}
							error={checkError(submitCount, metadataEmprestimosFinanciamentoNaoCirculante)}
							
						/>

						</Box>

						<Box width='30%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('outrosPassivosNaoCirculantes')}:`}
							value={soNumero(outrosPassivosNaoCirculantes.value)}
							onChange={event => setFieldValue('outrosPassivosNaoCirculantes', event.target.value)}
							onFocus={() => setFieldTouched('outrosPassivosNaoCirculantes', true)}
							error={checkError(submitCount, metadataOutrosPassivosNaoCirculantes)}
							
						/>

						</Box>
						</Box>		

						<Box display='flex' flexDirection='row'>
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('outrosPassivosCirculantes')}:`}
							value={soNumero(outrosPassivosCirculantes.value)}
							onChange={event => setFieldValue('outrosPassivosCirculantes', event.target.value)}
							onFocus={() => setFieldTouched('outrosPassivosCirculantes', true)}
							error={checkError(submitCount, metadataOutrosPassivosCirculantes)}
							
						/>

						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('naoCirculantePassivo')}:`}
							value={soNumero(naoCirculantePassivo.value)}
							onChange={event => setFieldValue('naoCirculantePassivo', event.target.value)}
							onFocus={() => setFieldTouched('naoCirculantePassivo', true)}
							error={checkError(submitCount, metadataNaoCirculantePassivo)}
							
						/>

						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('patrimonioLiquido')}:`}
							value={soNumero(patrimonioLiquido.value)}
							onChange={event => setFieldValue('patrimonioLiquido', event.target.value)}
							onFocus={() => setFieldTouched('patrimonioLiquido', true)}
							error={checkError(submitCount, metadataPatrimonioLiquido)}
							
						/>

						</Box>

						</Box>	
					
				</CardContent>
				</Card>


				<Card style={{ marginTop: 8 }}>
					<CardHeader
						title={translateWithHtml('Dados do Balanço Patrimonial 2021')}
						action={
							<Fragment>
								<Box>
									<Aprovacao
										itensAnalise={itensAnalise}
										setItensAnalise={setItensAnalise}
										comentarios={comentarios}
										setComentarios={setComentarios}
										tipoItem={
											ENUM_ITEMS_ANALISE.find(x => x.internalName === 'Dados_Balanco_Patrimonial')
												.value
										}
										historicoEmpresa={historicoEmpresa}
										user={user}
										disableEdit={disableEdit}
										statusEmpresa={statusEmpresa}
									/>
								</Box>
							</Fragment>
						}
					/>


				<CardContent>
					<Box display='flex' flexDirection='row'>
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('ativoTotal')}:`}
								value={soNumero(ativoTotalAnoDois.value)}
								onChange={event => setFieldValue('ativoTotalAnoDois', event.target.value)}
								onFocus={() => setFieldTouched('ativoTotalAnoDois', true)}
								error={checkError(submitCount, metadataAtivoTotalAnoDois)}
								
							/>
						
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('circulanteAtivo')}:`}
								value={soNumero(circulanteAtivoAnoDois.value)}
								onChange={event => setFieldValue('circulanteAtivoAnoDois', event.target.value)}
								onFocus={() => setFieldTouched('circulanteAtivoAnoDois', true)}
								error={checkError(submitCount, metadataCirculanteAtivoAnoDois)}
								
							/>
						
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('outrosAtivosCirculante')}:`}
								value={soNumero(outrosAtivosCirculanteAnoDois.value)}
								onChange={event => setFieldValue('outrosAtivosCirculanteAnoDois', event.target.value)}
								onFocus={() => setFieldTouched('outrosAtivosCirculanteAnoDois', true)}
								error={checkError(submitCount, metadataOutrosAtivosCirculanteAnoDois)}
								
							/>
						
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('disponibilidades')}:`}
								value={soNumero(disponibilidadesAnoDois.value)}
								onChange={event => setFieldValue('disponibilidadesAnoDois', event.target.value)}
								onFocus={() => setFieldTouched('disponibilidadesAnoDois', true)}
								error={checkError(submitCount, metadataDisponibilidadesAnoDois)}
								
							/>
						
						</Box>

						</Box>

						<Box display='flex' flexDirection='row'>
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('estoques')}:`}
							value={soNumero(estoquesAnoDois.value)}
							onChange={event => setFieldValue('estoquesAnoDois', event.target.value)}
							onFocus={() => setFieldTouched('estoquesAnoDois', true)}
							error={checkError(submitCount, metadataEstoquesAnoDois)}
							
						/>

						</Box>
		
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('ativoNaoCirculante')}:`}
							value={soNumero(ativoNaoCirculanteAnoDois.value)}
							onChange={event => setFieldValue('ativoNaoCirculanteAnoDois', event.target.value)}
							onFocus={() => setFieldTouched('ativoNaoCirculanteAnoDois', true)}
							error={checkError(submitCount, metadataAtivoNaoCirculanteAnoDois)}
							
						/>
		
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('passivoTotal')}:`}
							value={soNumero(passivoTotalAnoDois.value)}
							onChange={event => setFieldValue('passivoTotalAnoDois', event.target.value)}
							onFocus={() => setFieldTouched('passivoTotalAnoDois', true)}
							error={checkError(submitCount, metadataPassivoTotalAnoDois)}
							
						/>

						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('circulantePassivo')}:`}
							value={soNumero(circulantePassivoAnoDois.value)}
							onChange={event => setFieldValue('circulantePassivoAnoDois', event.target.value)}
							onFocus={() => setFieldTouched('circulantePassivoAnoDois', true)}
							error={checkError(submitCount, metadataCirculantePassivoAnoDois)}
							
						/>

						</Box>
						</Box>

						<Box display='flex' flexDirection='row'>

						<Box width='35%' paddingRight={`${theme.spacing(1)}px`}>

<						FormInput
							label={`${translate('emprestimosFinanciamentoCirculante')}:`}
							value={soNumero(emprestimosFinanciamentoCirculanteAnoDois.value)}
							onChange={event => setFieldValue('emprestimosFinanciamentoCirculanteAnoDois', event.target.value)}
							onFocus={() => setFieldTouched('emprestimosFinanciamentoCirculanteAnoDois', true)}
							error={checkError(submitCount, metadataEmprestimosFinanciamentoCirculanteAnoDois)}
							
						/>

						</Box>

						<Box width='35%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('emprestimosFinanciamentoNaoCirculante')}:`}
							value={soNumero(emprestimosFinanciamentoNaoCirculanteAnoDois.value)}
							onChange={event => setFieldValue('emprestimosFinanciamentoNaoCirculanteAnoDois', event.target.value)}
							onFocus={() => setFieldTouched('emprestimosFinanciamentoNaoCirculanteAnoDois', true)}
							error={checkError(submitCount, metadataEmprestimosFinanciamentoNaoCirculanteAnoDois)}
							
						/>

						</Box>

						<Box width='30%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('outrosPassivosNaoCirculantes')}:`}
							value={soNumero(outrosPassivosNaoCirculantesAnoDois.value)}
							onChange={event => setFieldValue('outrosPassivosNaoCirculantesAnoDois', event.target.value)}
							onFocus={() => setFieldTouched('outrosPassivosNaoCirculantesAnoDois', true)}
							error={checkError(submitCount, metadataOutrosPassivosNaoCirculantesAnoDois)}
							
						/>

						</Box>
						</Box>		

						<Box display='flex' flexDirection='row'>
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('outrosPassivosCirculantes')}:`}
							value={soNumero(outrosPassivosCirculantesAnoDois.value)}
							onChange={event => setFieldValue('outrosPassivosCirculantesAnoDois', event.target.value)}
							onFocus={() => setFieldTouched('outrosPassivosCirculantesAnoDois', true)}
							error={checkError(submitCount, metadataOutrosPassivosCirculantesAnoDois)}
							
						/>

						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('naoCirculantePassivo')}:`}
							value={soNumero(naoCirculantePassivoAnoDois.value)}
							onChange={event => setFieldValue('naoCirculantePassivoAnoDois', event.target.value)}
							onFocus={() => setFieldTouched('naoCirculantePassivoAnoDois', true)}
							error={checkError(submitCount, metadataNaoCirculantePassivoAnoDois)}
							
						/>

						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('patrimonioLiquido')}:`}
							value={soNumero(patrimonioLiquidoAnoDois.value)}
							onChange={event => setFieldValue('patrimonioLiquidoAnoDois', event.target.value)}
							onFocus={() => setFieldTouched('patrimonioLiquidoAnoDois', true)}
							error={checkError(submitCount, metadataPatrimonioLiquidoAnoDois)}
							
						/>

						</Box>

						</Box>	
					
				</CardContent>
				</Card>

				<Card style={{ marginTop: 8 }}>
					<CardHeader
						title={translateWithHtml('Dados do Balanço Patrimonial 2020')}
						action={
							<Fragment>
								<Box>
									<Aprovacao
										itensAnalise={itensAnalise}
										setItensAnalise={setItensAnalise}
										comentarios={comentarios}
										setComentarios={setComentarios}
										tipoItem={
											ENUM_ITEMS_ANALISE.find(x => x.internalName === 'Dados_Balanco_Patrimonial')
												.value
										}
										historicoEmpresa={historicoEmpresa}
										user={user}
										disableEdit={disableEdit}
										statusEmpresa={statusEmpresa}
									/>
								</Box>
							</Fragment>
						}
					/>


				<CardContent>
					<Box display='flex' flexDirection='row'>
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('ativoTotal')}:`}
								value={soNumero(ativoTotalAnoTres.value)}
								onChange={event => setFieldValue('ativoTotalAnoTres', event.target.value)}
								onFocus={() => setFieldTouched('ativoTotalAnoTres', true)}
								error={checkError(submitCount, metadataAtivoTotalAnoTres)}
								
							/>
						
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('circulanteAtivo')}:`}
								value={soNumero(circulanteAtivoAnoTres.value)}
								onChange={event => setFieldValue('circulanteAtivoAnoTres', event.target.value)}
								onFocus={() => setFieldTouched('circulanteAtivoAnoTres', true)}
								error={checkError(submitCount, metadataCirculanteAtivoAnoTres)}
								
							/>
						
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('outrosAtivosCirculante')}:`}
								value={soNumero(outrosAtivosCirculanteAnoTres.value)}
								onChange={event => setFieldValue('outrosAtivosCirculanteAnoTres', event.target.value)}
								onFocus={() => setFieldTouched('outrosAtivosCirculanteAnoTres', true)}
								error={checkError(submitCount, metadataOutrosAtivosCirculanteAnoTres)}
								
							/>
						
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>
		
						<FormInput
								label={`${translate('disponibilidades')}:`}
								value={soNumero(disponibilidadesAnoTres.value)}
								onChange={event => setFieldValue('disponibilidadesAnoTres', event.target.value)}
								onFocus={() => setFieldTouched('disponibilidadesAnoTres', true)}
								error={checkError(submitCount, metadataDisponibilidadesAnoTres)}
								
							/>
						
						</Box>

						</Box>

						<Box display='flex' flexDirection='row'>
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('estoques')}:`}
							value={soNumero(estoquesAnoTres.value)}
							onChange={event => setFieldValue('estoquesAnoTres', event.target.value)}
							onFocus={() => setFieldTouched('estoquesAnoTres', true)}
							error={checkError(submitCount, metadataEstoquesAnoTres)}
							
						/>

						</Box>
		
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('ativoNaoCirculante')}:`}
							value={soNumero(ativoNaoCirculanteAnoTres.value)}
							onChange={event => setFieldValue('ativoNaoCirculanteAnoTres', event.target.value)}
							onFocus={() => setFieldTouched('ativoNaoCirculanteAnoTres', true)}
							error={checkError(submitCount, metadataAtivoNaoCirculanteAnoTres)}
							
						/>
		
						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('passivoTotal')}:`}
							value={soNumero(passivoTotalAnoTres.value)}
							onChange={event => setFieldValue('passivoTotalAnoTres', event.target.value)}
							onFocus={() => setFieldTouched('passivoTotalAnoTres', true)}
							error={checkError(submitCount, metadataPassivoTotalAnoTres)}
							
						/>

						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('circulantePassivo')}:`}
							value={soNumero(circulantePassivoAnoTres.value)}
							onChange={event => setFieldValue('circulantePassivoAnoTres', event.target.value)}
							onFocus={() => setFieldTouched('circulantePassivoAnoTres', true)}
							error={checkError(submitCount, metadataCirculantePassivoAnoTres)}
							
						/>

						</Box>
						</Box>

						<Box display='flex' flexDirection='row'>

						<Box width='35%' paddingRight={`${theme.spacing(1)}px`}>

<						FormInput
							label={`${translate('emprestimosFinanciamentoCirculante')}:`}
							value={soNumero(emprestimosFinanciamentoCirculanteAnoTres.value)}
							onChange={event => setFieldValue('emprestimosFinanciamentoCirculanteAnoTres', event.target.value)}
							onFocus={() => setFieldTouched('emprestimosFinanciamentoCirculanteAnoTres', true)}
							error={checkError(submitCount, metadataEmprestimosFinanciamentoCirculanteAnoTres)}
							
						/>

						</Box>

						<Box width='35%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('emprestimosFinanciamentoNaoCirculante')}:`}
							value={soNumero(emprestimosFinanciamentoNaoCirculanteAnoTres.value)}
							onChange={event => setFieldValue('emprestimosFinanciamentoNaoCirculanteAnoTres', event.target.value)}
							onFocus={() => setFieldTouched('emprestimosFinanciamentoNaoCirculanteAnoTres', true)}
							error={checkError(submitCount, metadataEmprestimosFinanciamentoNaoCirculanteAnoTres)}
							
						/>

						</Box>

						<Box width='30%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('outrosPassivosNaoCirculantes')}:`}
							value={soNumero(outrosPassivosNaoCirculantesAnoTres.value)}
							onChange={event => setFieldValue('outrosPassivosNaoCirculantesAnoTres', event.target.value)}
							onFocus={() => setFieldTouched('outrosPassivosNaoCirculantesAnoTres', true)}
							error={checkError(submitCount, metadataOutrosPassivosNaoCirculantesAnoTres)}
							
						/>

						</Box>
						</Box>		

						<Box display='flex' flexDirection='row'>
						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('outrosPassivosCirculantes')}:`}
							value={soNumero(outrosPassivosCirculantesAnoTres.value)}
							onChange={event => setFieldValue('outrosPassivosCirculantesAnoTres', event.target.value)}
							onFocus={() => setFieldTouched('outrosPassivosCirculantesAnoTres', true)}
							error={checkError(submitCount, metadataOutrosPassivosCirculantesAnoTres)}
							
						/>

						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('naoCirculantePassivo')}:`}
							value={soNumero(naoCirculantePassivoAnoTres.value)}
							onChange={event => setFieldValue('naoCirculantePassivoAnoTres', event.target.value)}
							onFocus={() => setFieldTouched('naoCirculantePassivoAnoTres', true)}
							error={checkError(submitCount, metadataNaoCirculantePassivoAnoTres)}
							
						/>

						</Box>

						<Box width='25%' paddingRight={`${theme.spacing(1)}px`}>

						<FormInput
							label={`${translate('patrimonioLiquido')}:`}
							value={soNumero(patrimonioLiquidoAnoTres.value)}
							onChange={event => setFieldValue('patrimonioLiquidoAnoTres', event.target.value)}
							onFocus={() => setFieldTouched('patrimonioLiquidoAnoTres', true)}
							error={checkError(submitCount, metadataPatrimonioLiquidoAnoTres)}
							
						/>

						</Box>

						</Box>	
					
				</CardContent>
				</Card>				
		</Box>
	);
}
