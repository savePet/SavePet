import { beforeAll, describe, it, expect } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { Modal } from 'antd';
import { ListarPetAdm } from '../ListarPetAdm';



describe('<ListarPetAdm>', () => {

  beforeAll(() => {

    render(<ListarPetAdm />, {
      wrapper: BrowserRouter
    });
  })

  it('Deve conter uma tag th "ID"', async () => {
    const th = await screen.queryByText("ID");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "RAÇA"', async () => {
    const th = await screen.queryByText("RAÇA");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "STATUSSAUDE"', async () => {
    const th = await screen.queryByText("STATUSSAUDE");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "ESPECIE"', async () => {
    const th = await screen.queryByText("ESPECIE");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "PORTEFISICO"', async () => {
    const th = await screen.queryByText("PORTEFISICO");
    expect(th).not.toBeNull();
  })

  it('Deve conter uma tag th "GENERO"', async () => {
    const th = await screen.queryByText("GENERO");
    expect(th).not.toBeNull();
  })

  it('deve renderizar o ícone de scroll na tabela', async () => {
    const scrollIcon = await screen.findByTestId('icon-scroll');
    expect(scrollIcon).toBeDefined();
  });

  it('deve abrir o modal ao clicar no ícone de scroll', async () => {
    const scrollIcon = await screen.findByTestId('icon-scroll');
    fireEvent.click(scrollIcon);

    const modalContent = screen.findByTestId('modal-content');
    expect(modalContent).not.toBeNull();
  });

  it('Deve renderizar o icone de close', () => {
    render(<Modal/>)
    const img_iconclose = screen.getByAltText("iconi para fechar o modal");
    expect(img_iconclose).not.toBeNull();
  })

  it('Deve conter uma tag p "Animal" no modal', async () => {
    const p = await screen.queryByText("Animal");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "ID" no modal', async () => {
    const p = await screen.queryByText("ID:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Nome" no modal', async () => {
    const p = await screen.queryByText("Raça:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "StatusSaude" no modal', async () => {
    const p = await screen.queryByText("StatusSaude:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Especie" no modal', async () => {
    const p = await screen.queryByText("Especie:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "PorteFisico" no modal', async () => {
    const p = await screen.queryByText("PorteFisico:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Genero" no modal', async () => {
    const p = await screen.queryByText("Genero:");
    expect(p).not.toBeNull();
  })

  it('Deve conter uma tag p "Cor" no modal', async () => {
    const p = await screen.queryByText("Cor:");
    expect(p).not.toBeNull();
  })

  it('deve abrir e fechar o modal corretamente', async () => {
    // Simula a abertura do modal
    fireEvent.click(screen.getByTestId('icon-scroll'));

    // Verifica se o modal está aberto
    expect(screen.getByText('Animal')).toBeDefined();
    expect(screen.getByText('ID:')).toBeDefined();
    expect(screen.getByText('Raça:')).toBeDefined();

    // Simula o fechamento do modal
    const img = fireEvent.click(screen.getByAltText("iconi para fechar o modal"));
    expect(img).not.toBeNull();

    // Verifica se o modal foi fechado
    const p = await screen.queryByText('Animal');
    expect(p).toBeNull();
  });

}) 