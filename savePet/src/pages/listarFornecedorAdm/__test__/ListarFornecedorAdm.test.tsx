import { beforeAll, describe, it, expect } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Modal } from 'antd';
import { ListarFornecedorAdm } from '../ListarFornecedorAdm';


describe('<ListarFornecedorAdm>', () => {

  beforeAll(() => {

    render(<ListarFornecedorAdm />, {
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

  it('Deve conter uma tag th "CNPJ"', async () => {
    const th = await screen.queryByText("CNPJ");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "ENDEREÇO"', async () => {
    const th = await screen.queryByText("ENDEREÇO");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "CONTATO"', async () => {
    const th = await screen.queryByText("CONTATO");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "TIPOFORNECEDOR"', async () => {
    const th = await screen.queryByText("TIPOFORNECEDOR");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "STATUSCADASTRO"', async () => {
    const th = await screen.queryByText("STATUSCADASTRO");
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

  it('Deve conter uma tag p "Informações de Fornecedor" no modal', async () => {
    const p = await screen.queryByText("Informações de Fornecedor");
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

  it('Deve conter uma tag p "Cnpj" no modal', async () => {
    const p = await screen.queryByText("Cnpj:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Endereço" no modal', async () => {
    const p = await screen.queryByText("Endereço:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Telefone" no modal', async () => {
    const p = await screen.queryByText("Telefone:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Email" no modal', async () => {
    const p = await screen.queryByText("Email:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "StatusCadastro" no modal', async () => {
    const p = await screen.queryByText("StatusCadastro:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "TipoFornecedor" no modal', async () => {
    const p = await screen.queryByText("TipoFornecedor:");
    expect(p).not.toBeNull();
  })

it('deve abrir e fechar o modal corretamente', async () => {
    // Simula a abertura do modal
    fireEvent.click(screen.getByTestId('icon-scroll'));

    // Verifica se o modal está aberto
    expect(screen.getByText('Informações de Fornecedor')).toBeDefined();
    expect(screen.getByText('ID:')).toBeDefined();
    expect(screen.getByText('Nome:')).toBeDefined();

    // Simula o fechamento do modal
    const img_icon = fireEvent.click(screen.getByAltText("iconi para fechar o modal"));
    expect(img_icon).not.toBeNull();

    // Verifica se o modal foi fechado
    const p = await screen.queryByText('Informações de Fornecedor');
    expect(p).toBeNull();
  });  

})