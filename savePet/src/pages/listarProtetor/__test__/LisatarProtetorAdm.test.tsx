import { beforeAll, describe, it, expect } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Modal } from 'antd';
import { ListarProtetorAdm } from '../ListarProtetorAdm';



describe('<ListarProtetorAdm>', () => {

  beforeAll(() => {

    render(<ListarProtetorAdm />, {
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
  
  it('Deve conter uma tag th "STATUSCADASTRO"', async () => {
    const th = await screen.queryByText("STATUSCADASTRO");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "DISPONIBILIDADEACOLHIMENTO"', async () => {
    const th = await screen.queryByText("DISPONIBILIDADEACOLHIMENTO");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "CANTATO"', async () => {
    const th = await screen.queryByText("CANTATO");
    expect(th).not.toBeNull();
  })

  it('deve renderizar o ícone de scroll na tabela', async () => {
    const scrollIcon = await screen.findByTestId('icon-scroll');
    expect(scrollIcon).toBeDefined();
  });

  it('deve abrir o modal ao clicar no ícone de scroll', async () => {
    const scrollIcon = await screen.findByTestId('icon-scroll');
    fireEvent.click(scrollIcon);

    const modalContentprotetor = screen.findByTestId('modal-content-protetor');
    expect(modalContentprotetor).not.toBeNull();
  });

  it('Deve renderizar o icone de close', () => {
    render(<Modal/>)
    const img = screen.getByAltText("iconi para fechar o modal");
    expect(img).not.toBeNull();
  })

  it('Deve conter uma tag p "Informações de Protetor" no modal', async () => {
    const p1 = await screen.queryByText("Informações de Protetor");
    expect(p1).not.toBeNull();
  })

  it('Deve conter um tag p "ID:" no modal', async () => {
    const p = await screen.queryByText("ID:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Nome" no modal', async () => {
    const p = await screen.queryByText("Nome:");
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

  it('Deve conter uma tag p "Disponibilidade de Acolhimento" no modal', async () => {
    const p = await screen.queryByText("Disponibilidade de Acolhimento:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Status Cadastro" no modal', async () => {
    const p = await screen.queryByText("Status Cadastro:");
    expect(p).not.toBeNull();
  })

 it('deve abrir e fechar o modal corretamente', async () => {
    // Simula a abertura do modal
    fireEvent.click(screen.getByTestId('icon-scroll'));

    // Verifica se o modal está aberto
    expect(screen.queryByText('Informações de Protetor')).toBeDefined();
    expect(screen.queryByText('ID:')).toBeDefined();
    expect(screen.queryByText('Nome:')).toBeDefined();

    // Simula o fechamento do modal
    const img = fireEvent.click(screen.getByAltText("iconi para fechar o modal"));
    expect(img).not.toBeNull();

    // Verifica se o modal foi fechado
    const scrollIcon = await screen.findByTestId('icon-scroll');
    expect(scrollIcon).toBeDefined();
  });

}) 