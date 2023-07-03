import { beforeAll, describe, it, expect } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Modal } from 'antd';
import { ListarOcorrenciaAdm } from '../ListarOcorrenciaAdm';

describe('<ListarOcorrenciaAdm>', () => {

  beforeAll(() => {

    render(<ListarOcorrenciaAdm />, {
      wrapper: BrowserRouter
    });
  })

  it('Deve conter uma tag span "Ocorrencias" no container', () => {
    const span = screen.findByTestId("test-ocorrencia-container");
    expect(span).not.toBeNull();
  })

  it('Deve conter um icone de cachorro', () => {
    const span = screen.findByTestId("icon-dog");
    expect(span).not.toBeNull();
  })

  it('Deve conter um icone de gato', () => {
    const span = screen.findByTestId("icon-cat");
    expect(span).not.toBeNull();
  })

  it('Deve renderiza "Ocorrencia" no card', () => {
    const ocorrencia = screen.findByTestId("test-ocorrencia-card");
    expect(ocorrencia).not.toBeNull();
  })


  it('Deve renderiza "regiao" no card', () => {
    const span = screen.findByTestId("test-regiao-card");
    expect(span).not.toBeNull();
  })


  it('Deve renderiza "descricao" no card', () => {
    const p = screen.findByTestId("test-descricao-card");
    expect(p).not.toBeNull();
  })

  it('Deve renderiza "statusOcorrencia" no card', () => {
    const p = screen.findByTestId("test-statusOcorrencia-card");
    expect(p).not.toBeNull();
  })


  it('deve renderizar o card na tabela', async () => {
    const modalTest= await screen.findByTestId('modal-test');
    expect(modalTest).toBeDefined();
  });

  it('deve abrir o modal ao clicar no card', async () => {
    const modalTest = await screen.findByTestId('modal-test');
    fireEvent.click(modalTest);

    const modal_Content = screen.findByTestId('modal-content');
    expect(modal_Content).not.toBeNull();
  });

  it('Deve renderizar o icone de close dentro do modal', () => {
    render(<Modal/>)
    const img = screen.getByAltText("iconi para fechar o modal");
    expect(img).not.toBeNull();
  })

  it('Deve renderiza "ocorrencia" h1 no modal', () => {
    const h1 = screen.findByTestId("test-correncia-modal");
    expect(h1).not.toBeNull();
  })

  it('Deve renderiza "regicao" h1 no modal', () => {
    const h1 = screen.findByTestId("test-regiao-modal");
    expect(h1).not.toBeNull();
  })

  it('Deve renderiza "statusOcorrencia" p no modal', () => {
    const p = screen.findByTestId("test-statusOcorrencia-modal");
    expect(p).not.toBeNull();
  })

  it('Deve renderiza "statusOcorrencia" p no modal', () => {
    const p = screen.findByTestId("test-descricao-modal");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag button "Status - Aceitar ocorrencia" no modal', async () => {
    const button = await screen.queryByText("Status - Aceitar ocorrencia");
    expect(button).not.toBeNull();
  })

  it('deve abrir e fechar o modal corretamente', async () => {
    // Simula a abertura do modal
    const modalTest = await screen.findByTestId('modal-test');
    fireEvent.click(modalTest);

    // Verifica se o modal está aberto
    expect(screen.findByTestId('test-correncia-modal')).toBeDefined();
    expect(screen.findByTestId('test-regiao-modal')).toBeDefined();
    expect(screen.findByTestId('test-descricao-modal')).toBeDefined();

    // Simula o fechamento do modal
    const img_icon = fireEvent.click(screen.getByAltText("iconi para fechar o modal"));
    expect(img_icon).not.toBeNull();

    // Verifica se o modal foi fechado
    const span = screen.findByTestId('test-correncia-modal');
    expect(span).not.toBeNull();
    }); 
})
