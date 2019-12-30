SHELL=/bin/sh
DOC=main

.SUFFIXES:
.SUFFIXES: .bib .pdf .tex
.PHONY: clean

run: $(DOC).pdf

$(DOC).pdf: $(DOC).bbl $(DOC).tex
	pdflatex $(DOC).tex -draftmode
	pdflatex $(DOC).tex 

$(DOC).bbl: $(DOC).aux
	bibtex $(DOC).aux

$(DOC).aux: $(DOC).bib
	pdflatex $(DOC).tex -draftmode
	pdflatex $(DOC).tex -draftmode

clean:
	rm -rf *.aux *.lof *.log *.lot *.toc *.bbl *.blg $(DOC).pdf
