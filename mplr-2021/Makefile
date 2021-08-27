SHELL=/bin/sh
DOC=main
LATEX=pdflatex
BIBPROG=bibtex

FILES= main.tex acmart.cls macros.tex graphics/motivating-example-glob-to-regexp-vscode.png graphics/funnel.png graphics/dts-generate-block-diagram.pdf graphics/evaluation-diagram.pdf main.bbl

.SUFFIXES:
.SUFFIXES: .bib .pdf .tex
.PHONY: clean

run: $(DOC).pdf

$(DOC).pdf: $(DOC).bbl $(DOC).tex
	$(LATEX) $(DOC) -draftmode
	$(LATEX) $(DOC) 

$(DOC).bbl: $(DOC).aux $(DOC).bib
	$(BIBPROG) $(DOC)

clean:
	rm -rf *.aux *.lof *.log *.lot *.toc *.bbl *.blg *.vtc *.out $(DOC).pdf

final.zip: $(FILES)
	zip final $(FILES)
