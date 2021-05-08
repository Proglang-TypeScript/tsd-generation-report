SHELL=/bin/sh
DOC=funnel
LATEX=pdflatex

.SUFFIXES:
.SUFFIXES: .bib .pdf .tex
.PHONY: clean

run: $(DOC).pdf

$(DOC).pdf: $(DOC).tex
	$(LATEX) $(DOC) -draftmode
	$(LATEX) $(DOC)

clean:
	rm -rf *.aux *.lof *.log *.lot *.toc *.bbl *.blg *.vtc *.out $(DOC).pdf
