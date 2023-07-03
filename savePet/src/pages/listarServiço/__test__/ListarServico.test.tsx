import { beforeAll, describe, it, expect } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { Modal } from 'antd';
import { ListarServico } from '../ListarServico';


describe('<ListarServico>', () => {

  beforeAll(() => {

    render(<ListarServico />, {
      wrapper: BrowserRouter
    });
  })

  it('Deve conter uma tag th "ID"', async () => {
    const th = await screen.queryByText("ID");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "NOME"', async () => {
    const th = await screen.queryByText("NOME");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "PREÇO"', async () => {
    const th = await screen.queryByText("PREÇO");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "QUANTIDADE"', async () => {
    const th = await screen.queryByText("QUANTIDADE");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "CONTATO FORNECEDOR"', async () => {
    const th = await screen.queryByText("CONTATO FORNECEDOR");
    expect(th).not.toBeNull();
  })

  it('deve renderizar o ícone de scroll na tabela', async () => {
    const scrollIcon = await screen.findByTestId('icon-scroll');
    expect(scrollIcon).toBeDefined();
  });

  it('deve abrir o modal ao clicar no ícone de scroll', async () => {
    const scrollIcon = await screen.findByTestId('icon-scroll');
    fireEvent.click(scrollIcon);

    const modal_Content = screen.findByTestId('modal-content');
    expect(modal_Content).not.toBeNull();
  });

  it('Deve renderizar o icone de close', () => {
    render(<Modal/>)
    const img = screen.getByAltText("iconi para fechar o modal");
    expect(img).not.toBeNull();
  })

  it('Deve conter uma tag p "Serviço do Fornecedor" no modal', async () => {
    const p = await screen.queryByText("Serviço do Fornecedor");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "ID" no modal', async () => {
    const p = await screen.queryByText("ID:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Nome" no modal', async () => {
    const p = await screen.queryByText("Nome:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Preço" no modal', async () => {
    const p = await screen.queryByText("Preço:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Quantidade" no modal', async () => {
    const p = await screen.queryByText("Quantidade:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Email" no modal', async () => {
    const p = await screen.queryByText("Email:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Telefone" no modal', async () => {
    const p = await screen.queryByText("Telefone:");
    expect(p).not.toBeNull();
  })

it('deve abrir e fechar o modal corretamente', async () => {
    // Simula a abertura do modal
    fireEvent.click(screen.getByTestId('icon-scroll'));

    // Verifica se o modal está aberto
    expect(screen.getByText('Serviço do Fornecedor')).toBeDefined();
    expect(screen.getByText('ID:')).toBeDefined();
    expect(screen.getByText('Nome:')).toBeDefined();

    // Simula o fechamento do modal
    const img_icon = fireEvent.click(screen.getByAltText("iconi para fechar o modal"));
    expect(img_icon).not.toBeNull();

    // Verifica se o modal foi fechado
    const p = await screen.queryByText('Serviço do Fornecedor');
    expect(p).toBeNull();
  });  

})