import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SymmaryCard } from "./styles";

export function Summary() {
    return (
      <SummaryContainer>
        <SymmaryCard>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>

          <strong>R$ 17.400,00</strong>
        </SymmaryCard>

        <SymmaryCard>
          <header>
            <span>Saidas</span>
            <ArrowCircleDown size={32} color="#f75a68" />
          </header>

          <strong>R$ 17.400,00</strong>
        </SymmaryCard>

        <SymmaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>

          <strong>R$ 17.400,00</strong>
        </SymmaryCard>
      </SummaryContainer>
    );
}